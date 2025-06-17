import { Colors, Gaps } from '@/shared/tokens';
import { Button, ErrorNotification, Input } from '@/shared/ui';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Index() {
	const [error, setError] = useState<string | undefined>('');

	const alert = () => {
		setError('Ошибка');
	};

	return (
		<View style={styles.container}>
			<ErrorNotification error={error} />
			<View style={styles.content}>
				<Image style={styles.logo} resizeMode="contain" source={require('../assets/logo.png')} />
				<View style={styles.form}>
					<Input placeholder="Email" />
					<Input isPassword placeholder="Password" />
					<Button text="Войти" onPress={alert} />
				</View>
				<Link href="/restore">
					<Text>Восстановить пароль</Text>
				</Link>
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
	},
	form: {
		alignSelf: 'stretch',
		gap: Gaps.g16,
	},
});
