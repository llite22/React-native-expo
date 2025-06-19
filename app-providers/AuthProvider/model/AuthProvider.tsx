import axios, { AxiosError } from 'axios';
import { AUTH_STORAGE_KEY, INITIAL_STATE } from './AutnConsts';
import { AuthContext } from './AuthContext';
import { useEffect, useState, ReactNode } from 'react';
import { AuthResponse, AuthState, LoginRequest } from './AuthInterfaces';
import * as SecureStore from 'expo-secure-store';
import { API } from '@/entities/auth/api';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [state, setState] = useState<AuthState>(INITIAL_STATE);

	useEffect(() => {
		(async () => {
			const json = await SecureStore.getItemAsync(AUTH_STORAGE_KEY);
			if (json) {
				setState(JSON.parse(json));
			}
		})();
	}, []);

	useEffect(() => {
		SecureStore.setItemAsync(AUTH_STORAGE_KEY, JSON.stringify(state));
	}, [state]);

	const login = async ({ email, password }: LoginRequest): Promise<void> => {
		setState({
			isLoading: true,
			accessToken: null,
			error: null,
		});
		try {
			const { data } = await axios.post<AuthResponse>(API.login, { email, password });
			setState({
				isLoading: false,
				accessToken: data.accessToken,
				error: null,
			});
		} catch (error) {
			if (error instanceof AxiosError) {
				console.error(error);
				setState({
					isLoading: false,
					accessToken: null,
					error: error.response?.data.message ?? 'Unknown error',
				});
			}
		}
	};

	const logout = async (): Promise<void> => {
		setState(INITIAL_STATE);
		await SecureStore.deleteItemAsync('auth');
	};

	return (
		<AuthContext.Provider value={{ ...state, login, logout }}>{children}</AuthContext.Provider>
	);
};
