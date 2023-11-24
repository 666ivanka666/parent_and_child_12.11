import { Module } from '@nestjs/common';
import { ParentChildService } from './parentandchild.service';
import { ParentChildController } from './parentandchild.controller';
import { ChildModule } from 'src/child/child.module';
import { ParentModule } from 'src/parent/parent.module';

@Module({
  imports: [ChildModule, ParentModule],
  providers: [ParentChildService],
  controllers: [ParentChildController],
})
export class ParentChildModule {}
