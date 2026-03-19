import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseFilters,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from './dto/pagination-query.dto';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { Public } from 'src/common/decorators/public.decorator';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
import { ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('coffees')
@UseFilters(new HttpExceptionFilter())
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @ApiForbiddenResponse({ description: 'Forbidden' })
  @Public()
  @Get()
  async getAll(@Query() query: PaginationQueryDto) {
    // throw new Error('error');
    // await new Promise<void>((resolve) => {
    //   setTimeout(() => resolve(), 5000);
    // });
    return this.coffeesService.findAll(query);
  }

  @Get(':coffeeId')
  getSpecific(@Param('coffeeId', ParseIntPipe) coffeeId: number) {
    return this.coffeesService.findOne(String(coffeeId));
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':coffeeId')
  update(
    @Param('coffeeId') coffeeId: string,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeesService.update(coffeeId, updateCoffeeDto);
  }

  @Delete(':coffeeId')
  remove(@Param('coffeeId') coffeeId: string) {
    return this.coffeesService.remove(coffeeId);
  }
}
