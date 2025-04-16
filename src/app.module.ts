import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MailerModule} from '@nestjs-modules/mailer';
import { User } from './user/user.entity';
import { PaymentEntity } from './payments/payment.entity';
import configuration from './config/configuration';

@Module({
  imports: [
    // Load configuration from the environment
    ConfigModule.forRoot({
      isGlobal: true, // makes it available everywhere
      load: [configuration], // use the configuration.ts file to load variables
    }),

    // Import the user and auth modules
    UserModule,
    AuthModule,

    // Database connection setup using TypeORM
    TypeOrmModule.forFeature([User, PaymentEntity]),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('db.host'),
        port: configService.get<number>('db.port'),
        username: configService.get<string>('db.username'),
        password: configService.get<string>('db.password'),
        database: configService.get<string>('db.name'),
        autoLoadEntities: true,
        synchronize: true,
        entities: [User, PaymentEntity],
      }),
      inject: [ConfigService], // inject ConfigService to access the loaded environment variables
    }),

    // Mailer module configuration
    MailerModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: configService.get<string>('mail.user'),
            pass: configService.get<string>('mail.pass'),
          },
        },
        defaults: {
          from: 'ChatApp <chatapp405@gmail.com>',
        },
      }),
      inject: [ConfigService], // inject ConfigService for email setup
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
