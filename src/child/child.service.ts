import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Child } from './type';

@Injectable()
export class ChildService {
  private children: Child[] = [];

  insertChild(firstName: string, lastName: string): string {
    const childId = uuidv4();
    this.children.push(new Child(childId, firstName, lastName));
    return childId;
  }

  getChild(): Child[] {
    return this.children;
  }

  getSingleChild(childId: string): Child {
    const [child] = this.findChild(childId);
    return child;
  }

  updateChild(childId: string, firstName: string, lastName: string): Child {
    const [child] = this.findChild(childId);
    if (firstName) {
      child.firstName = firstName;
    }
    if (lastName) {
      child.lastName = lastName;
    }

    return child;
  }

  deleteChild(childId: string) {
    const [, index] = this.findChild(childId);
    this.children.splice(index, 1);
    return { message: 'Usjesno obrisano' };
  }

  findChild(id: string): [Child, number] {
    const childIndex = this.children.findIndex((parent) => parent.id === id);
    if (childIndex === -1) {
      throw new NotFoundException(`Child with ID ${id} not found`);
    }
    return [this.children[childIndex], childIndex];
  }

  assignParent(child: Child, parentId: string) {
    child.parentIds.push(parentId);
  }
}
