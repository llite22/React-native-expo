import { Colors, Gaps } from '@/shared/tokens';
import { Button, ErrorNotification, Input, CustomLink } from '@/shared/ui';
import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useAuth } from '@/app-providers/AuthProvider';

export default function Index() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const { accessToken, isLoading, error, login } = useAuth();
	const [localError, setLocalError] = useState<string | null>(null);

	useEffect(() => {
		if (error) {
			setLocalError(error);
		}
	}, [error]);

	useEffect(() => {
		if (accessToken) {
			router.replace('/(app)');
		}
	}, [accessToken]);

	const submit = () => {
		if (!email || !password) {
			setLocalError('Введите email и пароль');
			return;
		}
		setLocalError(null);
		login({ email, password });
	};

	return (
		<View style={styles.container}>
			{localError && <ErrorNotification error={localError} />}
			<View style={styles.content}>
				<Image style={styles.logo} contentFit="contain" source={require('@/assets/logo.png')} />
				<View style={styles.form}>
					<Input placeholder="Email" value={email} onChangeText={setEmail} />
					<Input isPassword placeholder="Password" value={password} onChangeText={setPassword} />
					<Button text="Войти" onPress={submit} isLoading={isLoading} />
				</View>
				<CustomLink href="/restore" text="Восстановить пароль" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1,
		padding: 55,
		backgroundColor: Colors.black,
	},
	content: {
		alignItems: 'center',
		gap: Gaps.g50,
	},
	logo: {
		width: 220,
		height: 60,
	},
	form: {
		alignSelf: 'stretch',
		gap: Gaps.g16,
	},
});
