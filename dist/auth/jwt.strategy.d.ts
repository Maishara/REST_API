import { UserService } from '../user/user.service';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    private readonly configService;
    private readonly authService;
    constructor(userService: UserService, configService: ConfigService, authService: AuthService);
    validate(payload: any): Promise<import("../user/user.entity").User>;
}
export {};
