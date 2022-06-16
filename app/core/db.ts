import { log, getTokenCookie, setTokenCookie } from '../utils/lib';

class DB {
  token = 'null';

  public setToken(token?: string) {
    const _token = token || getTokenCookie()?.token;
    if (_token) {
      this.token = _token;
    }
    if (token) {
      setTokenCookie(token);
    }
  }
}

export default DB;
