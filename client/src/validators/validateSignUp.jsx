
const defaultValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const username = {
  required: true,
  pattern: /^[A-Za-z][A-Za-z0-9_]{7,29}$/
}

const email = {
  required: true,
  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const password = {
  required: true,
  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
}

export const validateSignUp = { username, email, password, defaultValues }
