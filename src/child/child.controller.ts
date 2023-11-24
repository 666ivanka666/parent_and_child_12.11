import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ChildService } from './child.service';
import { ChildDto } from './dto';
import { Child } from './type';
import { IdDto } from 'src/common/decorators';

@Controller('child')
export class ChildController {
  constructor(private readonly childService: ChildService) {}

  @Post()
  addChild(@Body() body: ChildDto): { id: string } {
    const generatedId = this.childService.insertChild(
      body.firstName,
      body.lastName,
    );
    return { id: generatedId };
  }

  @Get()
  getAllChildren(): Child[] {
    return this.childService.getChild();
  }

  @Get(':id')
  getChildById(@Param() params: IdDto): Child {
    return this.childService.getSingleChild(params.id);
  }

  @Put(':id')
  updateChild(@Param() params: IdDto, @Body() body: ChildDto): Child {
    const { id } = params;
    return this.childService.updateChild(id, body.firstName, body.lastName);
  }

  @Delete(':id')
  deleteChildById(@Param() param: IdDto): { message: string } {
    return this.childService.deleteChild(param.id);
  }
}
