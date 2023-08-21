import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './schemas/movie.schema';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

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

  @Put()
  async updateMovie(
    @Param('id')
    id: string,
    @Body()
    movie: UpdateMovieDto,
  ): Promise<Movie> {
    return this.movieService.updateById(id, movie);
  }

  @Delete(':id')
  async deleteMovie(
    @Param('id')
    id: string,
  ): Promise<Movie> {
    return this.movieService.deleteById(id);
  }
}
