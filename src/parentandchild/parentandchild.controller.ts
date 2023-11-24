import { Controller, Put, Body } from '@nestjs/common';
import { ParentChildDto } from './dto';
import { ParentChildService } from './parentandchild.service';

@Controller('parentchild')
export class ParentChildController {
  constructor(private readonly parentchildService: ParentChildService) {}

  @Put()
  updateChild(@Body() body: ParentChildDto) {
    return this.parentchildService.updateParentChild(
      body.parentId,
      body.childId,
    );
  }
}
