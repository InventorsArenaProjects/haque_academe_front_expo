// ------------ System Components ------------  
import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

const Input = ({ label, placeholder, value = '', type, changeListener, styleInput, styleContainer, logo, errMsg, keyType, isEditable }) => {
    const [val, setVal] = useState('');

    const checkType = (type) => {
        let types = ["default", "number-pad", "decimal-pad", "numeric", "email-address", "phone-pad"];
        return types.indexOf(type) !== -1 ? true : false
    }

    return (
        <>

            <View style={[styles.wrapper, styleContainer]}>
                {label && <Text>{label}</Text>}
                <View style={[styleInput, errMsg && errMsg !== null && styles.invalidInput, styles.inpWrapper]}>
                    {logo ? <View style={styles.inpLogo}>{logo}</View> : <></>}
                    <TextInput
                        returnKeyType={keyType ? keyType : "done"}
                        style={styles.input}
                        onChangeText={changeListener ? (e) => {
                            setVal(e);
                            changeListener(e);
                        } : (e) => {
                            setVal(e);
                        }}
                        value={val === '' ? value : val}
                        placeholder={placeholder ? placeholder : null}
                        keyboardType={checkType(type) ? type : 'default'}
                        editable={isEditable?true:isEditable}
                    />
                </View>

            </View>
            {errMsg && errMsg !== null && <Text style={styles.invalidMsg}>{errMsg}</Text>}
        </>
    )
}

export default Input

const styles = StyleSheet.create({
    inpWrapper: {
        backgroundColor: "white",
        width: "100%",
        flexDirection: "row"
    },
    inpLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: "2%"
    },
    input: {
        fontSize: 16,
        paddingHorizontal: 13,
        flex: 1
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