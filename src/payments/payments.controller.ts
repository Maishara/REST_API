// src/payments/payments.controller.ts
import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('checkout')
  async checkout(@Request() req, @Body('amount') amount: number) {
    const userId = req.user.id;
    return this.paymentsService.checkout(userId, amount);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getPayments(@Request() req) {
    return this.paymentsService.getUserPayments(req.user.id);
  }
}
