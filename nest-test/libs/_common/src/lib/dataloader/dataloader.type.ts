import * as DataLoader from 'dataloader';

export type NotificationParentLoaderType = DataLoader<Notification, any>;

export type UserDataLoaderType = {};

export type NotificationDataLoaderType = {
  notificationParentLoader: NotificationParentLoaderType;
};
