import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from '../user/user.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private userRepository;
    configService: ConfigService;
    constructor(userService: UserService, jwtService: JwtService, userRepository: Repository<User>);
    register(createUserDto: CreateUserDto): Promise<User>;
    validateUser(email: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    getJwtSecret(): Promise<string>;
}
