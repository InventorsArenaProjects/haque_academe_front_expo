import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import EyeIcon from 'react-native-vector-icons/Entypo'

const SecureInput = ({ label, styleInput, styleContainer, placeholder, changeListener, errMsg, keyType, logo }) => {
    const [hidePass, setHidePass] = useState(true);
    return (
        <>
            <View style={styleContainer}>
                {label ? <Text>{label}</Text> : <></>}
                <View style={[styleInput, errMsg && errMsg !== null && styles.invalidInput, styles.passInp]}>
                    {logo ? <View style={styles.inpLogo}>{logo}</View> : <></>}
                    <TextInput
                        returnKeyType={keyType ? keyType : "done"}
                        style={{ flex: 1, fontSize: 16, paddingHorizontal: 13 }}
                        secureTextEntry={hidePass}
                        onChangeText={changeListener ? changeListener : null}
                        placeholder={placeholder}
                    />
                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
                        <Pressable onPress={() => { hidePass ? setHidePass(false) : setHidePass(true) }}>
                            {hidePass ? <EyeIcon name="eye-with-line" size={20} color={"grey"} /> : <EyeIcon name="eye" size={20} color={"grey"} />}
                        </Pressable>
                    </View>
                </View>
            </View>
            {errMsg && errMsg !== null && <Text style={styles.invalidMsg}>{errMsg}</Text>}
        </>

    )
}

export default SecureInput

const styles = StyleSheet.create({
    passInp: {
        flexDirection: 'row',
        width: "100%",
        backgroundColor: "white"
    },
    inpLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: "red",
        paddingLeft: "2%"
    },
    invalidInput: {
        borderColor: "red",
        borderWidth: 1
    },
    invalidMsg: {
        color: "red",
        marginHorizontal: 5,
        marginTop: 3
    }
})

