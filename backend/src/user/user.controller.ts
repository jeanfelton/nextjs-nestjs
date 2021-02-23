import { createUserDto } from '../shared/DTO/User/create-user.dto';
import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';



@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(
        private readonly userService :UserService
    ){}

    @Get() 
    @ApiOperation({summary: 'Get all users'})   
    @ApiResponse({status: 200, description: 'Success'})
    @ApiResponse({status: 403, description: 'Forbidden'})
    async getAllUsers() {
        return this.userService.findMany();
    }

    @Post()
    @ApiOperation({summary: 'Add a new user'})
    @ApiBody({type: createUserDto, required: true})
    @ApiResponse({status: 200, description: 'Success'})
    @ApiResponse({status: 403, description: 'Forbidden'})
    async addUser(
        @Body() user:createUserDto
    ) {
        return this.userService.create(user);
    }


}
