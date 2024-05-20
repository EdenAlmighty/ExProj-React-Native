import { icons, images } from '@/constants';
import React, { useState } from 'react';
import { Image, Pressable, Text, TextInput, TextInputProps, TextStyle, View, ViewStyle } from 'react-native';

interface CustomFormProps extends TextInputProps {
    title: string;
    value: string;
    handleChangeText: (text: string) => void;
    placeholder?: string;
    otherStyles?: string;
}

export function FormField({
    title,
    value,
    handleChangeText,
    placeholder = '',
    otherStyles = '',
    ...props
}: CustomFormProps) {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>
            <View className='flex-row w-full h-16 px-4 bg-black-100 rounded-2xl border-black-200 focus:border-secondary border-2 items-center'>
                <TextInput
                    className='flex-1 text-white font-psemibold text-base'
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor='#7b7b8b'
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                />
                {title === "Password" && 
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                    <Image source={!showPassword ? icons.eye : icons.eyeHide} 
                    className='w-6 h-6'
                    resizeMode='contain'/>
                </Pressable>
                }
            </View>
        </View>
    );
}