import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePixelDto } from './dto/create-pixel.dto';
import { UpdatePixelDto } from './dto/update-pixel.dto';
import { PixelEntity } from './entities/pixel.entity';

@Injectable()
export class PixelService {
  constructor(
    @InjectRepository(PixelEntity)
    private pixelRepository: Repository<PixelEntity>,
  ) { }

  async create(createPixelDto: CreatePixelDto) {
    console.log('PixelService create', createPixelDto);
    const pixel = await this.pixelRepository.create(createPixelDto);
    return await this.pixelRepository.save(pixel);
  }

  async findAll() {
    const pixels = await this.pixelRepository.find();
    return pixels;
  }

  findOne(id: number) {
    return `This action returns a #${id} pixel`;
  }

  update(id: number, updatePixelDto: UpdatePixelDto) {
    return `This action updates a #${id} pixel`;
  }

  remove(id: number) {
    return `This action removes a #${id} pixel`;
  }
}
