// ---------------- System Components ---------------- 
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useContext } from 'react'

// ---------------- Third Party Components ---------------- 
import Entypo from "react-native-vector-icons/Entypo";

// ---------------- Custom Components ---------------- 
// globals 
import color from "../../globalStyles/color";
// commons
import Input from '../commons/inputs/Input'
import SecureInput from '../commons/inputs/SecureInput'
import FormContainer from '../commons/containers/FormContainer'
import FormBtn from '../commons/buttons/FormBtn'
// specifics 
import login from '../../context/actions/login'
// state 
import { GlobalContext } from '../../context/Provider';
// -------------- Constants --------------
let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

// ======================= RENDER ======================= 
const LoginForm = ({ course_id }) => {
    // set default states
    const [form, setForm] = useState({}); //set user given data 
    const [invalidErr, setInvalidErr] = useState({}); // set validation errors

    // global state 
    const { authDispatch, authState } = useContext(GlobalContext);

    // function called when form was submited 
    const onSubmit = async () => {
        let isValid = false;

        if (!form.email || form.email.trim() === '') {
            setInvalidErr((prev) => {
                return { ...prev, ["email"]: "Email field is required" }
            });
            isValid = false;
        } else {
            setInvalidErr((prev) => {
                return { ...prev, ["email"]: null }
            });
            isValid = true;
        }

        if (!form.password || form.password.trim() === '') {
            setInvalidErr((prev) => {
                return { ...prev, ["password"]: "Password field is required" }
            });
            isValid = false;
        } else {
            setInvalidErr((prev) => {
                return { ...prev, ["password"]: null }
            });
            isValid = true;
        }

        if (isValid) {
            login({ ...form, course_id })(authDispatch);
        }
    }

    // function called when written every single word 
    const onChange = (label, value) => {
        setForm({ ...form, [label]: value })

        if (label === "email" && value.trim() === '') {
            setInvalidErr((prev) => {
                return { ...prev, ["email"]: "Email field is required" }
            });
        } else {
            setInvalidErr((prev) => {
                return { ...prev, ["email"]: null }
            })
        }

        if (label === "password" && value.trim() === '') {
            setInvalidErr((prev) => {
                return { ...prev, ["password"]: "Password field is required" }
            })
        } else {
            setInvalidErr((prev) => {
                return { ...prev, ["password"]: null }
            })
        }
    }

    // ===================== RENDER ===================== 
    return (
        <FormContainer style={{ paddingTop: "2%", paddingBottom: "10%" }}>
            <View style={styles.container}>
                <View style={styles.loginHeading}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Please login here</Text>
                </View>
                {/* email input */}
                <Input
                    logo={<Entypo name="email" size={20} color={'grey'} />}
                    placeholder="Email"
                    changeListener={(value) => onChange("email", value)}
                    styleContainer={{ borderRadius: 8, height: H/15 }}
                    styleInput={{ borderRadius: 8, height: H/15 }}
                    errMsg={invalidErr.email}
                />

                {/* password input */}
                <SecureInput
                    logo={<Entypo name="key" size={20} color={'grey'} />}
                    changeListener={(value) => onChange("password", value)}
                    placeholder={"Your password"}
                    styleContainer={{ marginTop: "5%", borderRadius: 8, height: H/15 }}
                    styleInput={{ borderRadius: 8, height: H/15 }}
                    errMsg={invalidErr.password}
                />

                {/* login button  */}
                <FormBtn
                    submitListener={() => onSubmit()}
                    title={<Text style={{ color: 'white', fontWeight: '800', fontSize: 16 }}>Login</Text>}
                    color={color.colorPrimary}
                    style={{ marginTop: 45 }}
                    isLoading={authState.loading}
                />
                {/* <View style={styles.forgotPasBtn}>
                    <TouchableOpacity style={{ marginRight: '2%', marginTop: 15 }} onPress={() => { navigation.navigate('ForgotPassword') }}>
                        <Text style={{ color: '#a2a6a3' }}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </FormContainer>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    loginHeading: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "10%"
    },
    // btn style 
    registerBtn: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%"
    },
    container: {
        marginTop: "5%",
        padding: "8%",
        borderColor: color.colorPrimary,
        borderWidth: 1,
        borderRadius: 10
    },
    forgotPasBtn: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: "6%"
    },
})