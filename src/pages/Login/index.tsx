import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useAuth } from '../../shared/hooks/useAuth';
import { loginValidationSchema } from './validation';
import Button from '../../components/Button';
import InputField from '../../components/Input';

const LoginPage = () => {
  const {login} = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      password: ''
    },
    validationSchema: loginValidationSchema,
    onSubmit: ({name}) => {
      login({
        name
      });
      navigate('/user');
    },
  });

  return (
    <div className='flex flex-col gap-2'>
      <form className='flex flex-col gap-3 [&_label]:text-center' onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <InputField
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name} required />
        <label htmlFor="password">Password</label>
        <InputField
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password} required />
        <Button type='submit'>Login</Button>
      </form>
    </div>
  )
}

export default LoginPage;