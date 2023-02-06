import { GoogleSignInButton } from 'components/buttons/GoogleSignInButton';
import { MouseEventHandler } from 'react';

interface ILoginForm {
    signInWithGoogle: MouseEventHandler;
}

export const LoginForm = ({ signInWithGoogle }: ILoginForm) => {
    return (
        <div>
            <GoogleSignInButton onClick={signInWithGoogle}></GoogleSignInButton>
        </div>
    );
};
