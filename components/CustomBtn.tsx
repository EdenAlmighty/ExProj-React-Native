import React, { useState } from 'react';
import { Text, Pressable, PressableProps, Button } from 'react-native';

interface CustomBtnProps extends PressableProps {
    title: string;
    handlePress: () => void;
    containerStyles?: string;
    textStyles?: string;
    isLoading?: boolean;
}

export function CustomBtn({
    title,
    handlePress,
    containerStyles = '',
    textStyles = '',
    isLoading,
    ...props
}: CustomBtnProps) {
    const [btnPress, setBtnPress] = useState(false)
    return (
        <Pressable
            onPressIn={() => setBtnPress(true)}
            onPress={handlePress}
            onPressOut={() => setTimeout(() => { setBtnPress(false) }, 500)}
            className={`bg-secondary rounded-xl min-h-[62px] mt-7 w-full justify-center items-center
                        ${containerStyles}
                        ${btnPress ? 'opacity-50' : ''}
                        ${props.disabled ? 'opacity-70' : ''}
                        `}

            disabled={isLoading}
        >
            <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
                {title}
            </Text>
        </Pressable >
    );
}

export default CustomBtn;