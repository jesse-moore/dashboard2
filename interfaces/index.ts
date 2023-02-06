import { User as FirebaseUser } from '@firebase/auth';

export type AuthUser = FirebaseUser;

export enum UserRole {
    AUTHENTICATED,
    UNAUTHENTICATED,
}

export type User = {
    id: number;
    name: string;
};

export interface IRouteGuard {
    children?: IRouteGuards;
    unauthorizedRedirect?: string;
    roles: UserRole[];
}

export interface IRouteGuards {
    [path: string]: IRouteGuard;
}
