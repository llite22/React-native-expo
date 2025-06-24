import { createContext } from 'react';
import { User } from './user.model';

export const profileContext = createContext<UserState>({
	profile: null,
	isLoading: false,
	error: null,
});

export interface UserState {
	profile: User | null;
	isLoading: boolean;
	error: string | null;
}
