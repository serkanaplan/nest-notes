import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsOptional } from "class-validator"
import { Product } from "src/product/entities/product.entity"
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class User {
    @Column()
    @PrimaryGeneratedColumn()
    @ApiProperty({example: 1})
    id: number

    @Column()
    @ApiProperty({example: 'serkan'})
    name: string

    @Column()
    @ApiProperty({example: 20, required:false})
    @IsNumber()
    @IsOptional()
    age?: number

    @Column()
    @ApiProperty({example: 'birisi@example.com'})
    mail: string

    @CreateDateColumn()
    createdDate!: Date

    @UpdateDateColumn()
    updatedDate!: Date

    @DeleteDateColumn()
    deletedDate!: Date

    @OneToMany(() => Product, (product) => product.user)
    products: Product[]
}