import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './schemas/movie.schema';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  async getAllMovies(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Post()
  async createMovie(
    @Body()
    movie: CreateMovieDto,
  ): Promise<Movie> {
    return this.movieService.create(movie);
  }

  @Get(':id')
  async getMovieById(
    @Param('id')
    id: string,
  ): Promise<Movie> {
    return this.movieService.findById(id);
  }
}
