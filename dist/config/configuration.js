"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    jwtSecret: process.env.JWT_SECRET || 'default-secret',
    stripeSecretKey: process.env.STRIPE_SECRET_KEY || '',
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT, 10) || 5432,
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || 'admin',
        name: process.env.DB_NAME || 'REST_API',
    },
    mail: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});
//# sourceMappingURL=configuration.js.map