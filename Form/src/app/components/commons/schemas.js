import * as Yup from 'yup'

export const createUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'The minimum number of characters is 3')
    .max(50, 'The maximum number of characters is 50')
    .matches(/^(?=.*[a-zA-Z ])/, 'Only alphabets are allowed')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .max(255, 'The maximum number of characters is 255')
    .required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
      'The password must have at least one uppercase letter, one lowercase letter and one number'
    )
    .min(8, 'The minimum number of characters is 8')
    .max(20, 'The maximum number of characters is 20')
    .required('Password is required')
})
