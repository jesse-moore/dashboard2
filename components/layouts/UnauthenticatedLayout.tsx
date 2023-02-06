import { ReactNode } from 'react';

type IUnauthenticatedLayout = {
    children: ReactNode;
};

const UnauthenticatedLayout = ({ children }: IUnauthenticatedLayout) => {
    return <>{children}</>;
};

export default UnauthenticatedLayout;
