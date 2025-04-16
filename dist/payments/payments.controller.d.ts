import { PaymentsService } from './payments.service';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    checkout(req: any, amount: number): Promise<import("./payment.entity").PaymentEntity>;
    getPayments(req: any): Promise<import("./payment.entity").PaymentEntity[]>;
}
