import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { colors, fonts, sizes } from '../../StyleGuide';

const FromInput = ({
    containerStyle,
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    errorMsg = ""
}) => {
    return (
        <View style={{ ...containerStyle }}>
            <View style={styles.errorMsg_1}>
                <Text style={{ color: colors.red, fontFamily: fonts.Bold }}>{errorMsg}</Text>
                {prependComponent}
            </View>
            <View style={styles.TextInput}>
                <TextInput
                    style={{
                        flex: 1,
                        ...inputStyle
                    }}
                    placeholder={placeholder}
                    placeholderTextColor={colors.grey}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    onChangeText={(text) => onChange(text)}
                />
                {appendComponent}
            </View>
        </View>
    )
}

export default FromInput

const styles = StyleSheet.create({
    TextInput: {
        flexDirection: "row-reverse",
        paddingHorizontal: 10,
        marginHorizontal: 30,
        marginVertical: 15,
        paddingVertical: 10,
        marginTop: sizes.textSizes,
        borderRadius: 20,
        elevation: 8,
        backgroundColor: colors.white,
    },
    errorMsg_1: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 45,
    }
})