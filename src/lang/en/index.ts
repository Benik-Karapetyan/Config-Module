import auth from "./auth";
import passwords from "./passwords";
import pagination from "./pagination";

export enum Actions {
  create = 'create',
  update = 'update',
  remove = 'remove',
  submit = 'submit',
  cancel = 'cancel',
  show = 'show',
  edit = 'edit',
  ok = 'ok',
}

export default {
  ...auth,
  ...passwords,
  ...pagination,
  create: 'create',
  update: 'update',
  remove: 'remove',
  submit: 'submit',
  cancel: 'cancel',
  show: 'show',
  edit: 'edit',
  ok: 'ok',
}
