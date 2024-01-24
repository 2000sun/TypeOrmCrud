import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from 'src/domain/cat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {

  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>
  ){}

  async create(createCatDto: CreateCatDto) {
    console.log('test',this.catRepository);
    console.log("cat",createCatDto);
    return await this.catRepository.save(createCatDto);
  }

  async findAll() {
    // return `이 액션은 고양이들을 다 반환해줍니다`;
    return await this.catRepository.find();
  }




  async findOne(id: number) {
    return await this.catRepository.findOne({ where: {id}});

    return `This action returns a #${id} cat`;
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    const cat = await this.catRepository.findOne({where : {id}});

    if(!cat) {
      throw new Error('cat을 찾을 수 없음.');
    }

    Object.assign(cat, updateCatDto);
    return await this.catRepository.save(cat);
    // return `This action updates a #${id} cat`;
  }

  
   async remove(id: number) {
    const cat = await this.catRepository.findOne({where : {id}});

    if(!cat) {
      throw new Error('cat을 찾을 수 없음.');
    }

    return await this.catRepository.remove(cat)
   
  }
}
