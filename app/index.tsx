import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Require cycle:']);

import { Image, ScrollView, Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { Redirect, router, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import { CustomBtn } from "@/components/CustomBtn";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/context/GlobalProvider";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const { user, loading, isLoggedIn } = useGlobalContext();
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (navigation.isFocused()) {
        setIsBtnLoading(false);
      }
    });
    return unsubscribe;
  }, [navigation]);

  const handlePress = () => {
    setIsBtnLoading(true);
    router.push('/login');
  };

  if (isLoggedIn) {
    return <Redirect href="/home" />;
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{' '}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation: embark on a journey of limitless exploration
          </Text>
          <CustomBtn
            title="Continue with Email"
            handlePress={handlePress}
            isLoading={isBtnLoading}
          />
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
