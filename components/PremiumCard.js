import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { scale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
const PremiumCard = () => {
    return (
        <TouchableOpacity>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#0563DB', '#0F8CFF', '#0252CA']} style={styles.linearGradient}>
                <View style={{ marginTop: scale(14), marginLeft: scale(16) }}>
                    <Text style={styles.buttonText}>
                        Unlock Premium
                    </Text>
                    <Text style={[styles.buttonText, { fontSize: scale(12), width: '75%', marginTop: scale(5) }]}>
                        Create Unlimited HD Scan & Picture to Text Scans without watermarks
                    </Text>
                </View>
                <View style={styles.triangle}>
                    <Image source={require('../assets/triangle.png')} />
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default PremiumCard;

const styles = StyleSheet.create({
    linearGradient: {
        height: scale(85),
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        position: 'relative'
    },
    buttonText: {
        fontSize: scale(16),
        color: '#ffffff',
        fontWeight: 'bold'
    },
    triangle: {
        position: 'absolute',
        right: 0,
        top: 0,
    }

});