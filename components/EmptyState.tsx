import { images } from '@/constants';
import React from 'react';
import { Image, Text, TextProps, View } from 'react-native';
import CustomBtn from './CustomBtn';
import { router } from 'expo-router';

interface EmptyStateProps extends TextProps {
    title: string;
    subtitle?: string;
}

export function EmptyState({ title, subtitle }: EmptyStateProps) {
    return (
        <View className='justify-center items-center px-4'>
            <Image
                source={images.empty}
                className='w-[270px] h-[215px]'
                resizeMode='contain'
            />

            <Text className='font-psemibold text-xl text-white '>
                {title}
            </Text>
            <Text className='font-pmedium text-sm text-gray-100 mt-2'>
                {subtitle}
            </Text>

            <CustomBtn
                title='Create video'
                handlePress={() => { router.push('/create') }}
                containerStyles="w-full my-5"
            />

        </View>
    );
}