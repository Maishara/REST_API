import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../user/user.service';
import { ConfigService } from '@nestjs/config'; // For handling environment variables
import { AuthService } from './auth.service';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
    private readonly authService: AuthService, // Injecting ConfigService for env variable access
    
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: authService.getJwtSecret(), // Use env variable for the secret
    });
  }

  async validate(payload: any) {
    // Here we assume 'email' is part of the JWT payload
    const user = await this.userService.findOneByEmail(payload.email);

    if (!user) {
      // Better error handling with custom exception or logging
      throw new Error('User not found'); // Optionally, throw custom HttpException instead
    }

    // If user is found, return the user data (or any necessary data)
    return user;
  }
}
