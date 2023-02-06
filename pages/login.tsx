import { LoginForm } from 'components/forms/LoginForm';
import { signInWithGoogle } from 'lib/firebase';

const Login = () => {
    return <LoginForm {...{ signInWithGoogle }}></LoginForm>;
};

export default Login;
