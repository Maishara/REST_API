// src/payments/payment.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('payments')
export class PaymentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column('decimal')
  amount: number;

  @Column()
  currency: string;

  @Column()
  status: string;

  @Column()
  transactionId: string;

  @CreateDateColumn()
  createdAt: Date;
}
