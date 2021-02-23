import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { environment } from './env.schema';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';




@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables:true,
      validationSchema: environment
    }),
    TypeOrmModule.forRoot(),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
