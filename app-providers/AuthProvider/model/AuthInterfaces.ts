export interface AuthResponse {
	accessToken: string;
}

export interface LoginRequest {
	email: string;
	password: string;
}

export interface AuthState {
	accessToken: string | null;
	isLoading: boolean;
	error: string | null;
}

export interface AuthContextProps extends AuthState {
	login: (req: LoginRequest) => Promise<void>;
	logout: () => Promise<void>;
}
