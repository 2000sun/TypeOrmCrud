import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dog } from 'src/domain/dog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DogsService {
  

  constructor(
    @InjectRepository(Dog)
    private dogRepository: Repository<Dog>
  ){}



  async create(createDogDto: CreateDogDto) {
    return await this.dogRepository.save(createDogDto);
  }

  async findAll() {
    return await this.dogRepository.find(); 
  }

  findOne(id: number) {
    return `This action returns a #${id} dog`;
  }

  update(id: number, updateDogDto: UpdateDogDto) {
    return `This action updates a #${id} dog`;
  }


  async remove(id: number) {
    const dog = await this.dogRepository.findOne({where : {id}});

    if(!dog) {
      throw new Error('dog을 찾을 수 없음.');
    }

    return await this.dogRepository.remove(dog)
    
  }
}
