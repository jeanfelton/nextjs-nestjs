import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';



@Injectable()
export class AuthService {
    constructor(
        private userService:UserService,
        private jwtService:JwtService
    ){}

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.userService.findUser(email,pass);
        if (user && user.password === pass) {
          const { password, ...result } = user;
          return result;
        }
        return null;
    }

    async login(user: User) {
        const payload = { email: user.email, sub: user.id, role:user.role };
        return {
          access_token: this.jwtService.sign(payload),
        };
    }

}
