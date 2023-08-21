import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './schemas/movie.schema';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  async getAllMovies(): Promise<Movie[]> {
    return this.movieService.findAll();
  }
}
