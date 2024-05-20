import { icons } from '@/constants';
import React from 'react';
import { Image, Pressable, TextInput, View } from 'react-native';

export function SearchInput() {
    return (
            <View className='flex-row w-full h-16 px-4 bg-black-100 rounded-2xl
             border-black-200 focus:border-secondary border-2 items-center space-x-4'>
                <TextInput
                    className='flex-1 text-white font-pregular mt-0.5 text-base'
                    // value={value}
                    placeholder={'Search for a video topic'}
                    placeholderTextColor='#7b7b8b'
                    // onChangeText={handleChangeText}
                />
                <Pressable>
                    <Image source={icons.search} 
                    className='w-5 h-5'
                    resizeMode='contain'/>
                </Pressable>
                
            </View>
        );
}