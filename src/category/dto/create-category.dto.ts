import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty()
    @ApiProperty( { example: 'Electronics'} )
    categoryName: string
}
