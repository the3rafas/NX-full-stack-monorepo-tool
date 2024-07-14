import { PrismaClient, User } from '@prisma/client';
import { Global, Injectable } from '@nestjs/common';
import { include, IRepository } from './repository.interface';
import { HelperService } from '../utils/helper.service';
import { PaginationRes } from '../paginator/paginator.types';

const prisma = new PrismaClient();
const helper = new HelperService();

//________________________________________pRISWMA MIDELWARE_______________________________________

prisma.$use(async (params, next) => {
  const { action, model } = params;
  console.log(action);

  if (
    ['findFirst', 'findMany', 'findUnique', 'findUniqueOrThrow'].includes(
      action,
    )
  ) {
    if (!params.args.where.deleted) {
      params.args.where = { ...params.args.where, deleted: false };
    }
  }

  if (['delete', 'deleteMany'].includes(action)) {
    if (params.args.where.softDelete === true) {
      const { softDelete, ...where } = params.args.where;

      params.action = 'update';
      params.args.where = where;
      params.args['data'] = { deleted: true };
    }
  }

  return next(params);
});

@Global()
@Injectable()
export class RepoBuilder implements IRepository<RepoBuilder> {
  constructor(private model: string) {}

  private Model = prisma[helper.camelize(this.model)];

  // findUnique query lets you retrieve a single database record:
  // By ID
  // By a unique attribute1

  async findUnique(where: object, includes?: include, tx?: any) {
    let include: {} = includes && this.includeFun(includes);
    const defaultModeld = tx ? tx[helper.camelize(this.model)] : this.Model;

    const res = await defaultModeld.findUnique({
      where,
      include,
    });
    return res;
  }

  //   findFirst returns the first record in a list that matches your criteria.

  async findOne(
    where: object,
    select: object = null,
    orderBy: object = {},
    includes?: include,
    transaction: any = {},
    tx?: any,
  ) {
    let include: {} = includes && this.includeFun(includes);

    const defaultModeld = tx ? tx[helper.camelize(this.model)] : this.Model;

    const res = await defaultModeld.findFirst({
      where,
      ...(includes && { include }),
      ...(select && { select }),
      ...(orderBy && { orderBy }),
      ...(transaction && transaction),
    });
    return res;
  }

  /*findFirstOrThrow retrieves the first record in a list in the same way as findFirst.
     However, if the query does not find a record,
     it returns NotFoundError: No User found error. */

  async findUniqueOrThrow(
    where: object,
    transaction: object = {},
    includes?: include,

    tx?: any,
  ) {
    let include: {} = includes && this.includeFun(includes);

    const defaultModeld = tx ? tx[helper.camelize(this.model)] : this.Model;
    const res = defaultModeld.findFirstOrThrow({
      where,
      ...(includes && { include }),
      ...(transaction && transaction),
    });
    return res;
  }

  //   findMany returns a list of record

  async findAll(
    where: object = {},
    orderBy: object = {},
    skip: number = null,
    take: number = null,
    select: object = null,
    includes?: include,

    tx?: any,
  ) {
    let include: {} = includes && this.includeFun(includes);

    const defaultModeld = tx ? tx[helper.camelize(this.model)] : this.Model;

    const res = await defaultModeld.findMany({
      where,
      ...(includes && { include }),
      orderBy,
      ...(skip && { skip }),
      ...(take && { take }),
      ...(select && select),
    });
    return res;
  }

  //   create creates a new database record.

  async createOne(data: object, select: object = null, tx?: any) {
    const defaultModeld = tx ? tx[helper.camelize(this.model)] : this.Model;

    const res = await defaultModeld.create({
      data,
      select,
    });
    return res;
  }

  //   update updates an existing database record.

  async update(
    where: object,
    data: object,
    select: object = null,
    includes?: include,

    tx?: any,
  ) {
    let include: {} = includes && this.includeFun(includes);

    const defaultModeld = tx ? tx[helper.camelize(this.model)] : this.Model;

    const res = await defaultModeld.update({
      where,
      data,
      select,
      ...(includes && { include }),
    });
    return res;
  }

  async updateOneFromExistingModel(modelId: string, data: object, tx?: any) {
    const defaultModeld = tx ? tx[helper.camelize(this.model)] : this.Model;

    const res = await defaultModeld.update({
      where: { id: modelId },
      data,
    });
    return res;
  }

  //  If an existing database record satisfies the where condition, it updates that record
  // If no database record satisfies the where condition, it creates a new database record

  async upsert(
    where: object,
    create: object,
    update: object = {},
    select: object = null,
    tx?: any,
  ) {
    const defaultModeld = tx ? tx[helper.camelize(this.model)] : this.Model;

    const res = await defaultModeld.upsert({
      where,
      update,
      create,
      select,
    });
    return res;
  }

  //  delete deletes an existing database record. You can delete a record:
  // By ID
  // By a unique attribute

  async delete(where: {}, tx?: any) {
    const defaultModeld = tx ? tx[helper.camelize(this.model)] : this.Model;

    const res = await defaultModeld.delete({
      where,
    });
    return res;
  }

  //   createMany creates multiple records in a transaction
  async bulkCreate(data: [], tx?: any) {
    const defaultModeld = tx ? tx[helper.camelize(this.model)] : this.Model;

    const req = await defaultModeld.createMany({
      data,
    });
    return req;
  }

  // updateMany updates a batch of existing database records in bulk and returns the number of updated records.

  async updateAll(where: object, data: object, tx?: any) {
    const defaultModeld = tx ? tx[helper.camelize(this.model)] : this.Model;

    const req = await defaultModeld.updateMany({
      where,
      data,
    });
    return req;
  }

  // deleteMany deletes multiple records in a transaction.

  //   Delete all User records
  // const deletedUserCount = await this.Model.deleteMany({})

  async deleteAll(where: any = {}, tx?: any) {
    const defaultModeld = tx ? tx[helper.camelize(this.model)] : this.Model;

    return await defaultModeld.deleteMany({
      where,
    });
  }

  async findPaginated(
    where: object = {},
    page: number = 0,
    limit: number = 15,
    order: [] = [],
    includes?: include,
  ): Promise<PaginationRes<any>> {
    const defaultModeld = this.Model;
    let include: {} = includes && this.includeFun(includes);
    let orderBy: {} =
      order.length !== 0 ? this.orderFun(order) : { createdAt: 'asc' };

    limit > 50 ? (limit = 50) : limit;

    limit < 0 ? (limit = 50) : limit;
    page < 0 ? (page = 1) : page;
    page > 50 ? (page = 50) : page;
    const count = await defaultModeld.count({
      where,
    });
    let existingPages: number = parseInt((count / limit).toFixed());
    let hasBefore: boolean;
    page === 1 ? (hasBefore = false) : (hasBefore = true);
    let hasNext: boolean;
    existingPages > page ? (hasNext = true) : (hasNext = false);

    const req = await defaultModeld.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy,
      ...(includes && { include }),
    });

    let nextCursor: string;
    hasNext ? (nextCursor = req[req.length - 1].id) : (nextCursor = null);

    return {
      pageInfo: {
        page,
        limit,
        nextCursor,
        hasNext,
        hasBefore,
        existingPages,
        count,
      },
      items: <any>req,
    };
  }
  private orderFun(includes: string[]) {
    console.log(2);

    let order: {};
    includes.forEach((e: string) => {
      switch (e.split('')[0]) {
        case '-':
          order[e] = 'desc';
          break;

        default:
          order[e] = 'asc';
          break;
      }
      order[e] = true;
    });
    return order;
  }
  private includeFun(includes: include) {
    let include: {};
    if (include[0].length === 1) {
      console.log('jere');

      return include;
    }
    includes.forEach((e) => {
      console.log('aaaaa');

      if (e[1]) {
        include[e[0]] = e[1];
      }
      include[e[0]] = true;
    });
    return include;
  }
}
