// backend/src/country/country.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Country')
export class Country {
  @PrimaryGeneratedColumn()
  CountryID: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  CountryName: string;
}
