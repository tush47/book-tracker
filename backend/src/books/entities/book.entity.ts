import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id : number;

  @Column({type : 'varchar' , length : 255})
  title: string;

  @Column({ type: 'varchar', length: 255 })
  author: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
