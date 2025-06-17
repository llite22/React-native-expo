import { Colors } from '@/shared/tokens';
import { Text, View } from 'react-native';

export default function NotFound() {
	return (
		<View>
			<Text style={{ color: Colors.white }}>Не нашли</Text>
		</View>
	);
}
