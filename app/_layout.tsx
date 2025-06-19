import { Colors } from '@/shared/tokens';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { AuthProvider } from '@/app-providers/AuthProvider';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const insets = useSafeAreaInsets();
	const [loaded, error] = useFonts({
		'FiraSans-Regular': require('../assets/fonts/FiraSans-Regular.ttf'),
		'FiraSans-SemiBold': require('../assets/fonts/FiraSans-SemiBold.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	useEffect(() => {
		if (error) {
			throw error;
		}
	}, [error]);

	if (!loaded) return null;

	return (
		<SafeAreaProvider>
			<AuthProvider>
				<StatusBar style="light" />
				<Stack
					screenOptions={{
						contentStyle: {
							backgroundColor: Colors.black,
							paddingTop: insets.top,
						},
						headerShown: false,
					}}
				>
					<Stack.Screen name="login" />
					<Stack.Screen
						name="restore"
						options={{
							presentation: 'modal',
						}}
					/>
				</Stack>
			</AuthProvider>
		</SafeAreaProvider>
	);
}
