import { Category } from '../schemas/movie.schema';

export class CreateMovieDto {
  readonly title: string;
  readonly year: number;
  readonly category: Category;
}
