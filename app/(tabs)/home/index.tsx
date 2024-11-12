import { Text, View } from "react-native";
import { Link } from 'expo-router';

const HomePage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#219ebc' }}>
      <Link href="/list/Started" style={{ color: '#FFFFFF', fontSize: 18 }}>Get Started</Link>
    </View>
  );
};

export default HomePage;

