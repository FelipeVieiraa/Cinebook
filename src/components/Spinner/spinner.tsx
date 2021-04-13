import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

function Spinner({ size, color }: ActivityIndicatorProps) {
    return(
        <ActivityIndicator size={size ?? "large"} color={color ?? "#F8F8F8"} />
    );
}

export default Spinner;