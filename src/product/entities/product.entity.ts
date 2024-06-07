import { Category } from "src/category/entities/category.entity";
import { User } from "src/user/Entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    brand: string;
    @Column()
    description: string;
    @Column()
    price: number;

    @ManyToOne(() => User, (user) => user.products)
    user: User

    @ManyToOne(() => Category, (category) => category.products)
    category: Category
}
