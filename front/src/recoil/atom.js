// recoil/atoms.js
import { atom } from 'recoil';

export const basketState = atom({
  key: 'basketState',
  default: [], // 장바구니에 담긴 상품 리스트의 초기 상태
});
