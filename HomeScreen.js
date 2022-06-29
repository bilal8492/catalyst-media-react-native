import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { scale } from 'react-native-size-matters';
import Carousel from './components/Carousel';
import LinearGradient from 'react-native-linear-gradient';
import PremiumCard from './components/PremiumCard';
import TextInputComp from './components/TextInputComp';
const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient colors={['#E5E5E5', '#f8f8f8', '#fefefe']} style={{ flex: 1 }} >
                <ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: scale(60), paddingHorizontal: scale(22), marginTop: scale(40) }}>
                        <View>
                            <Text style={{ fontSize: scale(30), fontWeight: 'bold', color: '#000' }}>Good Evening</Text>
                            <Text style={{ fontSize: scale(16), fontWeight: '500', color: '#9B9B9B' }}>Welcome back</Text>
                        </View>
                        <Image style={{ height: scale(38), width: scale(38) }} source={require('./assets/king.png')} />
                    </View>
                    <View style={{ marginTop: scale(22) }}>
                        <PremiumCard />
                    </View>
                    <View style={{ marginTop: scale(22) }}>
                        <TextInputComp />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: scale(22) }}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Image source={require('./assets/single.png')} />
                            <Text style={{ fontSize: scale(12), fontWeight: '700', color: '#000', marginTop: scale(10) }}>Single Scan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Image source={require('./assets/batch.png')} />
                            <Text style={{ fontSize: scale(12), fontWeight: '700', color: '#000', marginTop: scale(10) }}>Batch Scan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Image source={require('./assets/scan.png')} />
                            <Text style={{ fontSize: scale(12), fontWeight: '700', color: '#000', marginTop: scale(10) }}>Scan to Text</Text>
                        </TouchableOpacity>
                    </View>

                    <Carousel />
                    <TouchableOpacity onPress={() => navigation.navigate('SplashScreen')}>
                        <Text style={{ color: '#000' }}>HomeScreen</Text>
                    </TouchableOpacity>
                </ScrollView>
            </LinearGradient>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({

    slider: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'pink',

    },
    imgParent: {
        height: scale(190),
        width: scale(190),
        backgroundColor: '#ddd',
        borderRadius: 10,
        marginLeft: scale(22),
        marginRight: scale(10),
        position: 'relative'
    },

});