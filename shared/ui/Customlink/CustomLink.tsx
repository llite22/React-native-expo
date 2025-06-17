import { StyleSheet, Text } from 'react-native';
import { Link, LinkProps } from 'expo-router';
import { Colors, Fonts } from '@/shared/tokens';

export const CustomLink = ({ text, ...props }: LinkProps & { text: string }) => {
	return (
		<Link style={styles.link} {...props}>
			<Text>{text}</Text>
		</Link>
	);
};

const styles = StyleSheet.create({
	link: {
		color: Colors.link,
		fontSize: Fonts.f18,
		fontFamily: Fonts.regular,
	},
});
