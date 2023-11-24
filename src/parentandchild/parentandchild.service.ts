import { Injectable } from '@nestjs/common';
import { ChildService } from 'src/child/child.service';
import { ParentService } from 'src/parent/parent.service';

@Injectable()
export class ParentChildService {
  constructor(
    private readonly childService: ChildService,
    private readonly parentService: ParentService,
  ) {}

  updateParentChild(parentId: string, childId: string) {
    // first validate all members
    const [child] = this.childService.findChild(childId);
    const [parent] = this.parentService.findParent(parentId);

    this.childService.assignParent(child, parentId);
    this.parentService.assignChild(parent, childId);

    return 'Relationship successfully established';
  }
}
