import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Get()
    check(): string {
        return 'string';        
    }

}
