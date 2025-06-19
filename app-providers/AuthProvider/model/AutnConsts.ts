import { AuthState } from './AuthInterfaces';

export const INITIAL_STATE: AuthState = {
	accessToken: null,
	isLoading: false,
	error: null,
};

export const AUTH_STORAGE_KEY = 'auth';
