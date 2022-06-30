import React from 'react'
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

const Footer = () => {
    return (
        <View style={styles.main}>
            <TouchableOpacity style={{ height: scale(22), width: scale(22), }}>
                <Image style={{ height: scale(24), width: scale(24), }} source={require('../assets/Library.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.plusParent}><Icon name='plus' size={30} color='#fff' /></TouchableOpacity>
            <TouchableOpacity style={{ height: scale(22), width: scale(22), }}>
                <Image style={{ height: scale(24), width: scale(24), }} source={require('../assets/Settings.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    main: {
        height: scale(52),
        width: '100%',
        backgroundColor: '#F3F3F3',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    plusParent: {
        height: scale(50),
        width: scale(50),
        borderRadius: 50,
        backgroundColor: '#49A6FC',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scale(-30)
    }
})
