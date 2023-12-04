import { Helmet } from 'react-helmet';
import { LoginForm } from '..//..//components/LoginFrom/LoginFrom';

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </>
  );
}
