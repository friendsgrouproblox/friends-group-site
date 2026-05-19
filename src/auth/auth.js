import { USERS } from "../data/users";

export function auth(login, password) {
  return USERS.find(
    (u) =>
      u.login === login &&
      u.password === password
  );
}