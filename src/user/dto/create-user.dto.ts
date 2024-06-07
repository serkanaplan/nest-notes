import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"
import { IsNull } from "typeorm"

export class CreateUserDto {
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'John Doe' })
    name: string

    @IsNumber()
    @ApiProperty({ example: 34,required: false })
    age?: number

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({ example: 'birisi@example.com' })
    mail: string
}