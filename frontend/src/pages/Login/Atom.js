import { atom } from 'recoil';

export const loginState = atom({
  key: 'values',
  default: {
    login_id: '',
    password: ''
  }
});
