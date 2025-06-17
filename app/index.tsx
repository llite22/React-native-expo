import { Colors, Gaps } from '@/shared/tokens';
import { Button, ErrorNotification, Input, CustomLink } from '@/shared/ui';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';

export default function Index() {
	const [error, setError] = useState<string | undefined>('');

	const alert = () => {
		setError('Ошибка');
	};

	return (
		<View style={styles.container}>
			<ErrorNotification error={error} />
			<View style={styles.content}>
				<Image style={styles.logo} contentFit="contain" source={require('@/assets/logo.png')} />
				<View style={styles.form}>
					<Input placeholder="Email" />
					<Input isPassword placeholder="Password" />
					<Button text="Войти" onPress={alert} />
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
