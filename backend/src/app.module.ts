import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { environment } from './env.schema';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UserController } from './user/user.controller';




@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables:true,
      validationSchema: environment
    }),
    TypeOrmModule.forRoot()
  ],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService, AuthService],
})
export class AppModule {}
