import EyeClosedIcon from '@/assets/icons/eye-closed';
import EyeOpenedIcon from '@/assets/icons/eye-opened';
import { Colors, Fonts, Radius } from '@/shared/tokens';
import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, TextInputProps, View } from 'react-native';

export const Input = ({ isPassword, ...props }: TextInputProps & { isPassword?: boolean }) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

	return (
		<View>
			<TextInput
				style={styles.input}
				secureTextEntry={isPassword && !isPasswordVisible}
				placeholderTextColor={Colors.gray}
				{...props}
			/>
			{isPassword && (
				<Pressable style={styles.eyeIcon} onPress={() => setIsPasswordVisible((state) => !state)}>
					{isPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
				</Pressable>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 58,
		backgroundColor: Colors.violetDark,
		paddingHorizontal: 24,
		borderRadius: Radius.r10,
		fontSize: Fonts.f16,
		color: Colors.gray,
	},
	eyeIcon: {
		position: 'absolute',
		right: 24,
		top: 16,
	},
});
