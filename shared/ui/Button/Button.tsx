import {
	ActivityIndicator,
	Animated,
	GestureResponderEvent,
	Pressable,
	PressableProps,
	StyleSheet,
	Text,
} from 'react-native';
import { Colors, Fonts, Radius } from '../../tokens';

export const Button = ({
	text,
	isLoading,
	...props
}: PressableProps & { text: string; isLoading?: boolean }) => {
	const animatedValue = new Animated.Value(100);
	const color = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [Colors.primary, Colors.primaryHover],
	});

	const fadeIn = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 100,
			useNativeDriver: true,
		}).start();
		props.onPressIn?.(e);
	};

	const fadeOut = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 100,
			duration: 100,
			useNativeDriver: true,
		}).start();
		props.onPressOut?.(e);
	};

	return (
		<Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
			<Animated.View
				style={{
					...styles.button,
					backgroundColor: color,
				}}
			>
				{!isLoading && <Text style={styles.text}>{text}</Text>}
				{isLoading && <ActivityIndicator size="large" color={Colors.white} />}
			</Animated.View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.primary,
		padding: 16,
		borderRadius: Radius.r10,
	},
	text: {
		color: Colors.white,
		fontSize: Fonts.f16,
		fontWeight: 'bold',
	},
});
