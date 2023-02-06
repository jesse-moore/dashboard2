import { AppWrapper } from 'components/AppWrapper';
import { RouteGuard } from 'components/RouteGuard';
import { ProvideAuth } from 'lib/context/useAuth';
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import { NextComponentType } from 'next/types';
import Layout from '../components/layouts/Layout';
import '../styles/main.scss';

const Root: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({ Component, pageProps }: AppLayoutProps) => {
    return (
        <ProvideAuth>
            <AppWrapper>
                <RouteGuard>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </RouteGuard>
            </AppWrapper>
        </ProvideAuth>
    );
};

export default Root;
