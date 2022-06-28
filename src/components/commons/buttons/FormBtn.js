import { ActivityIndicator,View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const FormBtn = ({title, submitListener, color, style, isDisable, isLoading}) => {
    return (
        <TouchableOpacity style={[style, {backgroundColor: color?color:"grey"}, styles.btn]} activeOpacity={0.8} disabled={isDisable} onPress={submitListener}>
            {isLoading?<ActivityIndicator size="large" color="white"/>:title?title:<Text>No title</Text>}
        </TouchableOpacity>
    )
}

export default FormBtn

const styles = StyleSheet.create({
    btn: {
        width: "100%",
        height: 47,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6
    }
})
