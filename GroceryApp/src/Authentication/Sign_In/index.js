import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FromInput from '../../Components/FromInput';
import AuthLayout from '../AuthLayout';
import { utils } from '../../../utils';
import { colors, fonts } from '../../StyleGuide';
import { Buttons } from '../../Components';


const Sign_In = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [showPss, setShowPss] = useState(false)
    const navigation = useNavigation();

    function isEnableSignInEmail() {
        return email != "" && emailError == "" && password != "" && passwordError == ""
    }

    return (
        <AuthLayout label="Log in">
            <View style={{ position: 'absolute', top: 350, left: 0, right: 0 }}>
                <FromInput
                    placeholder="Email"
                    autoCompleteType='email'
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    inputStyle={{
                        fontFamily: fonts.Bold,
                        textDecorationLine: "none"
                    }}
                    errorMsg={emailError}
                    prependComponent={
                        <View>
                            <Text style={{ color: colors.black, fontFamily: fonts.Bold, fontSize: 14, }}>Email Address</Text>
                        </View>
                    }
                />
                <FromInput
                    placeholder="Password"
                    autoCompleteType="password"
                    secureTextEntry={!showPss}
                    onChange={(value) => {
                        utils.validatePassword(value, setPasswordError)
                        setPassword(value)
                    }}
                    inputStyle={{
                        fontFamily: fonts.Bold,
                        textDecorationLine: "none"
                    }}
                    errorMsg={passwordError}
                    prependComponent={
                        <View>
                            <Text style={{ color: colors.black, fontFamily: fonts.Bold, fontSize: 16, }}>Password</Text>
                        </View>
                    }
                />
                <TouchableOpacity onPress={() => navigation.navigate("Forgot_Password")}>
                    <View style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: 35, justifyContent: "flex-start" }}>
                        <Text style={{ fontFamily: fonts.Bold, color: colors.black, }}>
                            Forgot Password?
                        </Text>
                    </View>
                </TouchableOpacity>
                <Buttons
                    buttonText="Login"
                    disabled={isEnableSignInEmail() ? false : true}
                    containerStyle={{
                        paddingVertical: 20,
                        marginHorizontal: 30,
                        alignItems: "center",
                        marginTop: 20,
                        borderRadius: 15,
                        backgroundColor: isEnableSignInEmail() ? colors.blue : colors.darkGreen,
                    }}
                    onPress={() => navigation.navigate("MainApp")}
                />
                <TouchableOpacity onPress={() => navigation.navigate("SingUpScreen")}>
                    <View style={{ flexDirection: 'row', marginVertical: 30, justifyContent: 'center' }}>
                        <Text style={{ color: colors.black, fontFamily: fonts.Bold }}>
                            Create New Account
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </AuthLayout>
    )
}

export default Sign_In

const styles = StyleSheet.create({})