import { PaginationRes } from "../paginator/paginator.types";

export type include = [[name?: string, value?: object]];
export interface IRepository<T> {
  findUnique(where: object, include?: include): Promise<T>;

  findOne(
    where: object,
    select?: object,
    orderBy?: object,
    include?: include,
    transaction?: object,
    tx?: any,
  ): Promise<T>;

  findUniqueOrThrow(
    where: object,
    transaction: object,
    include?: include,
    tx?: any,
  ): Promise<T>;

  findAll(
    where?: object,
    orderBy?: object,
    skip?: number,
    take?: number,
    select?: object,
    include?: include,
    tx?: any,
  ): Promise<T[]>;

  findPaginated(
    where: object,
    page: number,
    limit: number,
    order?: string[],
    includes?: include,
  ): Promise<PaginationRes<T>>;

  createOne(data: object, select?: object, tx?: any): Promise<T>;

  update(
    where: object,
    data: object,
    select?: object,
    include?: include,
    tx?: any,
  ): Promise<T>;

  upsert(
    where: object,
    create: object,
    update?: object,
    select?: object,
  ): Promise<T>;

  updateOneFromExistingModel(
    modelId: string,
    input: object,
    tx?: any,
  ): Promise<T>;

  delete(where: object, tx?: any): Promise<T>;

  bulkCreate(data: [], tx?: any): Promise<T>;

  updateAll(where: object, data: object, tx?: any): Promise<T[]>;

  deleteAll(where: object, tx?: any): Promise<void>;
}
