import { CustomLink } from '@/shared/ui';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { Colors, Fonts, Gaps } from '@/shared/tokens';

export default function NotFound() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<Image
					style={styles.image}
					contentFit="contain"
					source={require('../assets/images/not-found.png')}
				/>
				<Text style={styles.text}>
					Ооо... что-то пошло не так. Попробуйте вернуться на главный экран
				</Text>
				<CustomLink href="/login" text="На главный экран" />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1,
		padding: 55,
	},
	content: {
		alignItems: 'center',
		gap: Gaps.g50,
	},
	image: {
		width: 204,
		height: 282,
	},
	text: {
		color: Colors.white,
		fontSize: Fonts.f16,
		fontFamily: Fonts.regular,
		textAlign: 'center',
	},
});
