import { useAuth } from '@/app-providers/AuthProvider';
import { profileContext } from '@/entities/user/model/user.state';
import { Button } from '@/shared/ui';
import { useContext } from 'react';
import { Text, View } from 'react-native';

export default function MyCourse() {
	const { profile } = useContext(profileContext);
	const { logout } = useAuth();

	return (
		<View>
			<Text>{profile?.name}</Text>
			<Button text="Выйти" onPress={() => logout()} />
		</View>
	);
}
