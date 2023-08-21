import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Category {
  ACTION = 'action',
  COMEDY = 'comedy',
  DRAMA = 'drama',
  HORROR = 'horror',
}

@Schema({
  timestamps: true,
})
export class Movie {
  @Prop()
  title: string;

  @Prop()
  year: number;

  @Prop()
  category: Category;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
