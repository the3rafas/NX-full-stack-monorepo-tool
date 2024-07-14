import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { GqlContext } from '@nest-test/_common';
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { currentUser } = ctx.getContext() as GqlContext;

    if (!currentUser) throw new Error('asdsadsad');

    // new BaseHttpException(ErrorCodeEnum.UNAUTHORIZED);

    return true;
  }
}
