export enum Password {
  throttled = 'throttled',
  token = 'token',
  reset = 'reset',
  user = 'user',
  sent = 'sent',
}

export default {
  reset: 'Your password has been reset!',
  sent: 'We have emailed your password reset link!',
  throttled: 'Please wait before retrying.',
  token: 'This password reset token is invalid.',
  user: "We can't find a user with that email address.",
}
