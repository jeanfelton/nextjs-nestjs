import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";



export class createUserDto {

    @ApiPropertyOptional({type: String})
    @IsString({message:'Enter first name - String'})
    firsName:string;

    @ApiPropertyOptional({type: String})
    @IsString({message:'Enter last name - String'})
    lastName:string;

    @ApiPropertyOptional({type: String})
    @IsEmail({},{message:'Enter Email'})
    email:string;

}