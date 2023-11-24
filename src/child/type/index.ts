export class Child {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public parentIds?: string[],
  ) {}
}
