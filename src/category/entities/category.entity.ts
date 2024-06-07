import { } from "class-validator";
import { Product } from "src/product/entities/product.entity";
import { BeforeInsert, Column, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";

export class Category {

    @PrimaryColumn()
    id: number;

    @Column()
    categoryName: string;

    @OneToMany(() => Product, (product) => product.category)
    products: Product[]

    @BeforeInsert()
    beforeInsert() {
        this.id =UUID.SUBTYPE_UUID
    }

}
