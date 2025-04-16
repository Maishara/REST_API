import { UserService } from './user.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UserService);
    getProfile(req: any): Promise<import("./user.entity").User>;
}
