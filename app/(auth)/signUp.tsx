import React, { useState } from 'react';
import { Alert, Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import CustomBtn from '@/components/CustomBtn';
import { FormField } from '@/components/FormField';
import { images } from '@/constants';
import { register } from '../../lib/appwrite';
import { StatusBar } from 'expo-status-bar';

export default function SignUp() {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = async () => {
        if (!Object.values(form).every(Boolean)) {
            Alert.alert('Please fill in all the fields.');
            return;
        }

        setIsSubmitting(true);
        try {
            const res = await register(form.email, form.password, form.username);
            router.replace('/home');
        } catch (err: unknown) {
            if (err instanceof Error) {
                Alert.alert('Error', err.message);
            } else {
                Alert.alert('Error', 'An unknown error occurred');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center min-h-[85vh] px-4 my-6">
                    <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[35px]" />
                    <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Sign Up to Aura</Text>

                    <FormField
                        title="Username"
                        value={form.username}
                        handleChangeText={(ev) => setForm({ ...form, username: ev })}
                        otherStyles="mt-10"
                    />

                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(ev) => setForm({ ...form, email: ev })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />

                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(ev) => setForm({ ...form, password: ev })}
                        otherStyles="mt-7"
                    />

                    <CustomBtn
                        title="Sign Up"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />

                    <View className="justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg text-gray-100 font-pregular">Have an account already?</Text>
                        <Link href="/login" className="text-lg font-psemibold text-secondary">Login</Link>
                    </View>
                </View>
            </ScrollView>
            <StatusBar style="light" />
        </SafeAreaView>
    );
}
