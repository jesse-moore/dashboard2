import { IRouteGuards, UserRole } from 'interfaces';

export const routeGuards: IRouteGuards = {
    _: {
        roles: [UserRole.AUTHENTICATED],
        unauthorizedRedirect: 'login',
    },
    login: {
        roles: [UserRole.UNAUTHENTICATED],
        unauthorizedRedirect: '',
    },
};
