import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Parent } from './type';

@Injectable()
export class ParentService {
  private parents: Parent[] = [];

  insertParent(firstName: string, lastName: string): string {
    const parentId = uuidv4();

    this.parents.push(new Parent(parentId, firstName, lastName));
    return parentId;
  }
  getParent(): Parent[] {
    return this.parents;
  }
  getSingleParent(parentId: string): Parent {
    const [parent] = this.findParent(parentId);
    return parent;
  }

  updateParent(parentId: string, firstName: string, lastName: string): Parent {
    const [parent] = this.findParent(parentId);
    if (firstName) {
      parent.firstName = firstName;
    }
    if (lastName) {
      parent.lastName = lastName;
    }

    return parent;
  }

  deleteParent(parentId: string) {
    const [, index] = this.findParent(parentId);
    this.parents.splice(index, 1);
    return { message: 'Uspjesno obrisano' };
  }

  findParent(id: string): [Parent, number] {
    const parentIndex = this.parents.findIndex((parent) => parent.id === id);
    if (parentIndex === -1) {
      throw new NotFoundException(`Parent with ID ${id} not found`);
    }
    return [this.parents[parentIndex], parentIndex];
  }

  assignChild(parent: Parent, childId: string) {
    if (!parent.childIds) {
      parent.childIds = [];
    }
    parent.childIds.push(childId);
  }
}
