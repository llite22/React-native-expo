import { useAuth } from '@/app-providers/AuthProvider';
import { CloseDrawer } from '@/features/layout/ui/CloseDrawer/CloseDrawer';
import { Colors, Gaps } from '@/shared/tokens';
import { CustomLink } from '@/shared/ui';
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

export const CustomDrawer = (props: DrawerContentComponentProps) => {
	const { logout } = useAuth();

	return (
		<DrawerContentScrollView {...props} contentContainerStyle={styles.scrollView}>
			<CloseDrawer navigation={props.navigation} />
			<View style={styles.content}>
				<Text>Text</Text>
			</View>
			<View style={styles.footer}>
				<Image style={styles.logo} contentFit="contain" source={require('@/assets/logo.png')} />
				<CustomLink onPress={() => logout()} href="/login" text="Выход" />
			</View>
		</DrawerContentScrollView>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
		backgroundColor: Colors.black,
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	footer: {
		gap: Gaps.g50,
		alignItems: 'center',
		marginBottom: 40,
	},
	logo: {
		width: 160,
		height: 40,
	},
});
