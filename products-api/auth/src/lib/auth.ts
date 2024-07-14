export type Authresponce = AuthSuccessResponce | AuthFalureResponce;
export interface AuthSuccessResponce {
  success: true;
  name: string;
}
export interface AuthFalureResponce {
  success: false;
}

export function doAuth(): Authresponce {
  return { success: true, name: 'ahmed' };
}
