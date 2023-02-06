import { signOut } from 'lib/firebase';
import Link from 'next/link';
import { ReactNode } from 'react';

type IAuthenticatedLayout = {
    children?: ReactNode;
};

const AuthenticatedLayout = ({ children }: IAuthenticatedLayout) => {
    return (
        <>
            <header>
                <nav className="flex gap-x-2">
                    <Link href="/">Home</Link>
                    <span>|</span>
                    <button onClick={() => signOut()}>Sign Out</button>
                </nav>
            </header>
            {children}
        </>
    );
};

export default AuthenticatedLayout;
