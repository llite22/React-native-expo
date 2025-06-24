import CloseIcon from '@/assets/icons/close';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Pressable, StyleSheet, View } from 'react-native';

export const CloseDrawer = ({
	navigation,
}: {
	navigation: DrawerContentComponentProps['navigation'];
}) => {
	return (
		<Pressable onPress={() => navigation.closeDrawer()}>
			<View style={styles.button}>
				<CloseIcon />
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		right: 20,
		top: 20,
	},
});
