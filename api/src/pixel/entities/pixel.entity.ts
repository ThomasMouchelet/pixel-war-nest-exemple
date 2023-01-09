import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pixel")
export class PixelEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    x: number;

    @Column()
    y: number;

    @Column()
    color: string;
}
