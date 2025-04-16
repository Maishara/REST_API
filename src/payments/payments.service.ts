// src/payments/payments.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentEntity } from './payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(PaymentEntity)
    private paymentRepo: Repository<PaymentEntity>,
  ) {}

  async checkout(userId: number, amount: number): Promise<PaymentEntity> {
    // Simulate a transaction
    const payment = this.paymentRepo.create({
      userId,
      amount,
      currency: 'usd',
      status: 'success',
      transactionId: Math.random().toString(36).substring(2, 15),
    });

    return this.paymentRepo.save(payment);
  }

  async getUserPayments(userId: number): Promise<PaymentEntity[]> {
    return this.paymentRepo.find({ where: { userId } });
  }
}
