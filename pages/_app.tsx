import { AppWrapper } from 'components/AppWrapper';
import { RouteGuard } from 'components/RouteGuard';
import { ProvideAuth } from 'lib/context/useAuth';
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import { NextComponentType } from 'next/types';
import Layout from '../components/layouts/Layout';
import '../styles/main.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { StyledEngineProvider } from '@mui/material';

const Root: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
    Component,
    pageProps,
}: AppLayoutProps) => {
    return (
        <ProvideAuth>
            <AppWrapper>
                <RouteGuard>
                    <StyledEngineProvider injectFirst>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </StyledEngineProvider>
                </RouteGuard>
            </AppWrapper>
        </ProvideAuth>
    );
};

export default Root;
