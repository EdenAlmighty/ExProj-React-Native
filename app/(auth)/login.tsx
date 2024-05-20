import CustomBtn from '@/components/CustomBtn';
import { FormField } from '@/components/FormField';
import { images } from '@/constants';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = () => { }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full justify-center min-h-[85vh] px-4 my-6'>
                    <Image source={images.logo}
                        resizeMode='contain'
                        className='w-[115px] h-[35px]' />
                    <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>Login to Aura</Text>

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
                        title='Login'
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />

                    <View className='justify-center pt-5 flex-row gap-2'>
                        <Text className='text-lg text-gray-100 font-pregular'>Don't have an account?</Text>
                        <Link href="/signUp" className='text-lg font-psemibold text-secondary'>Sign Up</Link>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}