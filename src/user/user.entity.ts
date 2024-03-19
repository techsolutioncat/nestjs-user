// user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column()
  accessToken: string;

  @Column()
  refreshToken: string;
}