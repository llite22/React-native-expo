import { Colors } from '@/shared/tokens';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Restore() {
	return (
		<View>
			<Link href="/">
				<Text style={{ color: Colors.white }}>Restore</Text>
			</Link>
		</View>
	);
}
