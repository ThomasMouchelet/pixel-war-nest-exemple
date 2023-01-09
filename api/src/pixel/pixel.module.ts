import { Module } from '@nestjs/common';
import { PixelService } from './pixel.service';
import { PixelController } from './pixel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PixelEntity } from './entities/pixel.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PixelEntity]),
  ],
  controllers: [PixelController],
  providers: [PixelService],
  exports: [PixelService],
})
export class PixelModule {}
