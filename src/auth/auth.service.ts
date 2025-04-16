// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from '../user/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthService {
  configService: ConfigService;
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    @InjectRepository(User)
        private userRepository: Repository<User>,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10); // 10 is the salt round
    const user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
    return this.userRepository.save(user);
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async getJwtSecret(): Promise<string> {
    return this.configService.get<string>('JWT_SECRET');
  }
}
