import { View } from "react-native";
import { Link } from "expo-router";

const ListPage = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10}}>
            <Link href='/List/1'>New One</Link>
            <Link href='/List/2'>New Two</Link>
            <Link href='/List/3'>New Tree</Link>
        </View>
    );
};

export default ListPage;