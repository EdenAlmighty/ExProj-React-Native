import { FIREBASE_AUTH } from '@/FirebaseCondig';
import CustomBtn from '@/components/CustomBtn';
import { FormField } from '@/components/FormField';
import { images } from '@/constants';
// import { login } from '@/lib/appwrite';
import { Link, router } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const auth = FIREBASE_AUTH

    async function submit() {
        try {
            setIsSubmitting(true)
            const res = await signInWithEmailAndPassword(auth, form.email, form.password)
            console.log('res', res);
            // await login(form.email, form.password)
        } catch (err) {
            console.log('err', err);
        } finally {

            setIsSubmitting(false)
        }
    }
    // async function submit() {
    //     try {
    //         setIsSubmitting(true)
    //         await login(form.email, form.password)
    //     } catch (err) {
    //         console.log('err', err);
    //     } finally {

    //         setIsSubmitting(false)
    //     }
    // }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full justify-center min-h-[85vh] px-4 my-6'>
                    <KeyboardAvoidingView behavior='padding'>
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
                        handlePress={() => submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />

                    <View className='justify-center pt-5 flex-row gap-2'>
                        <Text className='text-lg text-gray-100 font-pregular'>Don't have an account?</Text>
                        <Link href="/signUp" className='text-lg font-psemibold text-secondary'>Sign Up</Link>
                    </View>
                    </KeyboardAvoidingView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}