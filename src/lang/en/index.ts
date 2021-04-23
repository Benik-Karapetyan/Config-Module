import auth from "./auth";
import common from "./common";
import passwords from "./passwords";
import pagination from "./pagination";

export default {
  ...auth,
  ...common,
  ...passwords,
  ...pagination,
}
