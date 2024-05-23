// import React from 'react';
// import { Text, Pressable, PressableProps, StyleSheet, ViewStyle, TextStyle } from 'react-native';

// interface CustomBtnProps extends PressableProps {
//     title: string;
//     handlePress: () => void;
//     containerStyles?: ViewStyle | ViewStyle[];
//     textStyles?: TextStyle | TextStyle[];
//     isLoading?: boolean;
// }

// export function CustomBtn({
//     title,
//     handlePress,
//     containerStyles,
//     textStyles,
//     isLoading = false,
//     ...props
// }: CustomBtnProps) {
//     return (
//         <Pressable
//             onPress={handlePress}
//             style={({ pressed }) => [
//                 styles.defaultContainer,
//                 containerStyles,
//                 isLoading && styles.loading,
//                 props.disabled && styles.disabled,
//                 pressed && styles.pressed,
//             ]}
//             disabled={isLoading}
//             {...props}
//         >
//             <Text style={[styles.defaultText, textStyles]}>
//                 {title}
//             </Text>
//         </Pressable>
//     );
// }

// const styles = StyleSheet.create({
//     defaultContainer: {
//         backgroundColor: '#FF8E01',
//         marginTop: 28,
//         borderRadius: 16,
//         minHeight: 62,
//         width: '100%',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     pressed: {
//         opacity: 0.5,
//     },
//     loading: {
//         opacity: 0.5,
//     },
//     disabled: {
//         opacity: 0.7,
//     },
//     defaultText: {
//         color: 'white',
//         fontWeight: '600',
//         fontSize: 18,
//     },
// });

// export default CustomBtn;


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