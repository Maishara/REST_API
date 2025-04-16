"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const mailer_1 = require("@nestjs-modules/mailer");
const user_entity_1 = require("./user/user.entity");
const payment_entity_1 = require("./payments/payment.entity");
const configuration_1 = require("./config/configuration");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.default],
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, payment_entity_1.PaymentEntity]),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: async (configService) => ({
                    type: 'postgres',
                    host: configService.get('db.host'),
                    port: configService.get('db.port'),
                    username: configService.get('db.username'),
                    password: configService.get('db.password'),
                    database: configService.get('db.name'),
                    autoLoadEntities: true,
                    synchronize: true,
                    entities: [user_entity_1.User, payment_entity_1.PaymentEntity],
                }),
                inject: [config_1.ConfigService],
            }),
            mailer_1.MailerModule.forRootAsync({
                useFactory: async (configService) => ({
                    transport: {
                        host: 'smtp.gmail.com',
                        port: 587,
                        secure: false,
                        auth: {
                            user: configService.get('mail.user'),
                            pass: configService.get('mail.pass'),
                        },
                    },
                    defaults: {
                        from: 'ChatApp <chatapp405@gmail.com>',
                    },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map