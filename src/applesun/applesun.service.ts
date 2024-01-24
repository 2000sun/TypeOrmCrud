import { Injectable } from '@nestjs/common';
import { CreateApplesunDto } from './dto/create-applesun.dto';
import { UpdateApplesunDto } from './dto/update-applesun.dto';
import { Applesun } from 'src/domain/applesun.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';



@Injectable()
export class ApplesunService {
  constructor(
    @InjectRepository(Applesun)
    private appleSunRepository: Repository<Applesun>
  ){}


  async generateDB(address: string) {
    const appleSun = new Applesun();
    appleSun.address = address;
    appleSun.nonce = v4();
    appleSun.expiredAt =   new Date(new Date().getTime() + 10 * 60 * 1000); // 현재시간으로 부터 10분뒤 만료

    return await this.appleSunRepository.save(appleSun);
  }


  


  create(createApplesunDto: CreateApplesunDto) {
    return 'This action adds a new applesun';
  }

  async findAll() {
    return await this.appleSunRepository.find();
  }




  findOne(id: number) {
    return `This action returns a #${id} applesun`;
  }

  update(id: number, updateApplesunDto: UpdateApplesunDto) {
    return `This action updates a #${id} applesun`;
  }

  async remove(id: number) {
    const addr = await this.appleSunRepository.findOne({where : {id}});

    if(!addr) {
      throw new Error('applesun 찾을 수 없음.');
    }

    return await this.appleSunRepository.remove(addr)
  }


  

}
