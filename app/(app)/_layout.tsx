import { useAuth } from '@/app-providers/AuthProvider';
import { Redirect, Stack } from 'expo-router';

export default function AppLayout() {
	const { accessToken } = useAuth();

	if (!accessToken) {
		return <Redirect href="/login" />;
	}

	return (
		<Stack>
			<Stack.Screen name="index" />
		</Stack>
	);
}
