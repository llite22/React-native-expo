import { Pressable, PressableProps, StyleSheet, View } from 'react-native';
import { Colors } from '@/shared/tokens';
import MenuIcon from '@/assets/icons/menu';
import { useState } from 'react';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';

export const MenuButton = ({
	navigation,
	...props
}: PressableProps & { navigation: DrawerNavigationProp<ParamListBase> }) => {
	const [clicked, setClicked] = useState<boolean>(false);

	return (
		<Pressable
			{...props}
			onPressIn={() => setClicked(true)}
			onPressOut={() => setClicked(false)}
			onPress={() => navigation.openDrawer()}
		>
			<View
				style={{
					...styles.button,
					backgroundColor: clicked ? Colors.violetDark : Colors.blackLight,
				}}
			>
				<MenuIcon />
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
		flex: 1,
	},
});
