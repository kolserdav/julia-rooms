import { Cookies } from 'react-cookie';
import { COOKIE_USER_ID, COOKIE_TOKEN, LOG_LEVEL } from './constants';

// eslint-disable-next-line no-unused-vars
enum LogLevel {
  log = 0,
  info = 1,
  warn = 2,
  error = 3,
}

export const log = (type: 'info' | 'warn' | 'error' | 'log', text: string, data?: any) => {
  if (LogLevel[type] >= LOG_LEVEL) {
    // eslint-disable-next-line no-console
    console[type](type, text, data);
  }
};

const cookies = new Cookies();
export const setLoginCookie = ({ userId }: { userId: number }) => {
  const expires = new Date();
  expires.setMonth(expires.getMonth() + 1);
  cookies.set(COOKIE_USER_ID, userId, {
    sameSite: true,
    expires,
    secure: true,
  });
};

export const getLoginCookie = (): number => {
  const str = cookies.get(COOKIE_USER_ID);
  const num = parseInt(str, 10);
  return Number.isNaN(num) ? 0 : num;
};

export const setTokenCookie = (token: string) => {
  const expires = new Date();
  expires.setMonth(expires.getMonth() + 1);
  cookies.set(COOKIE_TOKEN, token, {
    sameSite: true,
    expires,
    secure: true,
  });
};

export const getTokenCookie = (): { token: string } | null => {
  const str = cookies.get(COOKIE_TOKEN);
  return str
    ? {
        token: str,
      }
    : null;
};