import { Text, View, Button } from "react-native";
import {Link, Stack} from 'expo-router';

const homePage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Link href="/home/Started">Get Started</Link>
    </View>
  );
};

export default homePage;