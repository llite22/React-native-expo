import { createContext } from 'react';
import { AuthContextProps } from './AuthInterfaces';

export const AuthContext = createContext<AuthContextProps>({
	accessToken: null,
	isLoading: false,
	error: null,
	login: async () => {},
	logout: async () => {},
});
