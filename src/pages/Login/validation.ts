import {string, object} from 'yup'

export const loginValidationSchema = object({
  name: string().required('Required field'),
  password: string().required('Required field'),
})