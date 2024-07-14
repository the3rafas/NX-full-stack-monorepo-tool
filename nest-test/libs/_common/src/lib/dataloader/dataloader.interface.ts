import { User } from '../Database/@generated/user/user.model';

export interface IDataLoaderService {
  createLoaders(current?: User);
}

export interface IDataLoaders {
  // securityGroupLoader: SecurityGroupLoaderType;
  // userLoader: UserLoaderType;
  // notificationParentLoader: NotificationParentLoaderType;
  // notificationReceiversLoader: NotificationReceiversLoaderType;
}
