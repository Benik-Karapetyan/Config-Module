export enum Password {
  throttled = 'throttled',
  token = 'token',
  reset = 'reset',
  user = 'user',
  sent = 'sent',
}

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

export enum Pagination {
  previous= 'previous',
  next = 'next'
}

export enum Auth {
  failed = 'failed',
  password = 'password',
  throttle = 'throttle'
}
