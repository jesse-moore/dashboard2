import { useAuth } from 'lib/context/useAuth';
import Head from 'next/head';
import { ReactNode } from 'react';
import AuthenticatedLayout from './AuthenticatedLayout';
import UnauthenticatedLayout from './UnauthenticatedLayout';

type ILayout = {
    children: ReactNode;
};

const Layout = ({ children }: ILayout) => {
    const { isAuthenticated } = useAuth();
    return (
        <div>
            <Head>
                {/* <title>{title}</title> */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {isAuthenticated ? (
                <AuthenticatedLayout>{children}</AuthenticatedLayout>
            ) : (
                <UnauthenticatedLayout>{children}</UnauthenticatedLayout>
            )}
        </div>
    );
};

export default Layout;
