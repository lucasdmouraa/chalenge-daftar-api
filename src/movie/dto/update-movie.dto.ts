import { Category } from '../schemas/movie.schema';

export class UpdateMovieDto {
  readonly title: string;
  readonly year: number;
  readonly category: Category;
}
