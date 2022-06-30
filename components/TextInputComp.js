import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign';

const TextInputComp = () => {
    return (
        <View style={styles.main}>
            <Icon name='search1' size={25} color='#9B9B9B' />
            <TextInput
                style={styles.input}
                placeholder="Search through your scans"
                placeholderTextColor={'#9B9B9B'}
                keyboardType="default"



            />
        </View>
    )
}

export default TextInputComp;

const styles = StyleSheet.create({
    input: {
        height: 40,
        fontSize: scale(13),
        marginLeft: scale(10)
    },
    main: {
        height: scale(40),
        width: '90%',
        alignSelf: 'center',
        borderRadius: 30,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15
    }
})