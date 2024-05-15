import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface CustomBtnProps extends TouchableOpacityProps {
    title: string;
    handlePress: () => void;
    containerStyles?: string;
    textStyles?: string;
    isLoading?: boolean;
}

export function CustomBtn({ ...props }: CustomBtnProps) {
    return (
        <TouchableOpacity
            onPress={props.handlePress}
            activeOpacity={0.7}
            className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center 
            ${props.containerStyles}
            ${props.isLoading ? 'opacity-50' : ''}`}
            disabled={props.isLoading}
            {...props}
        >
            <Text className={`text-primary font-psemibold text-lg ${props.textStyles}`}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
}
