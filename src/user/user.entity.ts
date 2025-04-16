// src/user/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  fullName: string;

  @Column({ type: 'bigint' })
  phone: string;

  @Column({ nullable: true })
  profilePicture: string;

  @Column({ default: 'user' })
  role: string;

  @Column({ default: true })
  isActive: boolean;
}
