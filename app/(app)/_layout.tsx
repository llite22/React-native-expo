import { useAuth } from '@/app-providers/AuthProvider';
import { Redirect } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Colors, Fonts } from '@/shared/tokens';
import { MenuButton } from '@/features/layout/ui/MenuButton/MenuButton';
import { CustomDrawer } from '@/entities/layout/ui/CustomDrawer/CustomDrawer';

export default function AppLayout() {
	const { accessToken } = useAuth();

	if (!accessToken) {
		return <Redirect href="/login" />;
	}

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer
				drawerContent={(props) => <CustomDrawer {...props} />}
				screenOptions={({ navigation }) => ({
					headerStyle: {
						backgroundColor: Colors.blackLight,
					},
					headerLeft: () => <MenuButton navigation={navigation} />,
					headerTitleStyle: {
						color: Colors.white,
						fontFamily: Fonts.regular,
						fontSize: Fonts.f20,
					},
					headerAlignItems: 'center',
					sceneStyle: {
						backgroundColor: Colors.black,
					},
				})}
			>
				<Drawer.Screen name="index" options={{ title: 'Мои курсы' }} />
			</Drawer>
		</GestureHandlerRootView>
	);
}
