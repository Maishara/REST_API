// src/user/user.controller.ts
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserService } from './user.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getProfile(@Req() req) {
    return this.usersService.findById(req.user.id);
  }
}
