declare const _default: () => {
    jwtSecret: string;
    stripeSecretKey: string;
    db: {
        host: string;
        port: number;
        username: string;
        password: string;
        name: string;
    };
    mail: {
        user: string;
        pass: string;
    };
};
export default _default;
