import { Colors, Fonts, Gaps } from '@/shared/tokens';
import { useEffect, useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text } from 'react-native';

export const ErrorNotification = ({ error }: { error?: string }) => {
	const [isShown, setIsShown] = useState<boolean>(false);
	const animatedValue = new Animated.Value(-100);

	const onEnter = () => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	useEffect(() => {
		if (!error) return;
		setIsShown(true);
		const timerId = setTimeout(() => {
			setIsShown(false);
		}, 3000);
		return () => {
			clearTimeout(timerId);
		};
	}, [error]);

	if (!isShown) return <></>;

	return (
		<Animated.View
			style={{ ...styles.error, transform: [{ translateY: animatedValue }] }}
			onLayout={onEnter}
		>
			<Text style={styles.errorText}>{error}</Text>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	error: {
		position: 'absolute',
		width: Dimensions.get('screen').width,
		backgroundColor: Colors.red,
		padding: Gaps.g16,
		top: 50,
	},
	errorText: {
		fontSize: Fonts.f16,
		color: Colors.white,
		textAlign: 'center',
	},
});
