import { PaymentEntity } from './payment.entity';
import { Repository } from 'typeorm';
export declare class PaymentsService {
    private paymentRepo;
    constructor(paymentRepo: Repository<PaymentEntity>);
    checkout(userId: number, amount: number): Promise<PaymentEntity>;
    getUserPayments(userId: number): Promise<PaymentEntity[]>;
}
