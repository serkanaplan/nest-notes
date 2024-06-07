import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { Column } from "typeorm";

export class CreateProductDto {
    @ApiProperty( { example: 'vestel'} )
    @Column()
    @IsString()
    brand: string;

    @ApiProperty( { example: 'venüs v5'} )
    @Column()
    @IsString()
    description: string;

    @Column()
    @IsNumber()
    @ApiProperty( { example: '1000'} )
    price: number;

    @IsNumber()
    @ApiProperty( { example: '1'} )
    userId: number
}
