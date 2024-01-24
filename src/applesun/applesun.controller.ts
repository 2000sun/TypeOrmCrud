import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ApplesunService } from './applesun.service';
import { CreateApplesunDto } from './dto/create-applesun.dto';
import { UpdateApplesunDto } from './dto/update-applesun.dto';


@Controller('applesun')
export class ApplesunController {
  constructor(private readonly applesunService: ApplesunService) {}

  @Get()
  findAll() {
    return this.applesunService.findAll();
  }

  @Post()
  create(@Body() createApplesunDto: CreateApplesunDto) {
    return this.applesunService.create(createApplesunDto);
  }

  @Get(':address')
  createAddress(@Param() param) {

      if(!/^[0-9a-fA-F]{40}$/.test(param.address)) {
      throw new HttpException('잘못된 주소', HttpStatus.BAD_REQUEST);
    }
     return this.applesunService.generateDB(param.address);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.applesunService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplesunDto: UpdateApplesunDto) {
    return this.applesunService.update(+id, updateApplesunDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applesunService.remove(+id);
  }

}
