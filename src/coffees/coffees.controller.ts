import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  @Get()
  getAll(@Query() query) {
    return this.coffeesService.findAll();
  }

  @Get(':coffeeId')
  getSpecific(@Param('coffeeId') coffeeId: number) {
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
