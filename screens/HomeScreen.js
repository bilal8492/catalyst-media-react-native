import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { scale } from 'react-native-size-matters';
import Carousel from '../components/Carousel';
import LinearGradient from 'react-native-linear-gradient';
import PremiumCard from '../components/PremiumCard';
import TextInputComp from '../components/TextInputComp';
import Footer from '../components/Footer';
const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient colors={['#E5E5E5', '#f8f8f8', '#fefefe']} style={{ flex: 1 }} >
                <ScrollView>
                    <View style={styles.welcParent}>
                        <View>
                            <Text style={styles.goodE}>Good Evening</Text>
                            <Text style={styles.wel}>Welcome back</Text>
                        </View>
                        <Image style={{ height: scale(38), width: scale(38) }} source={require('../assets/king.png')} />
                    </View>
                    <View style={styles.topSpace}>
                        <PremiumCard />
                    </View>
                    <View style={styles.topSpace}>
                        <TextInputComp />
                    </View>

                    <View style={styles.scanParent}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Image source={require('../assets/single.png')} />
                            <Text style={styles.scanText}>Single Scan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Image source={require('../assets/batch.png')} />
                            <Text style={styles.scanText}>Batch Scan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Image source={require('../assets/scan.png')} />
                            <Text style={styles.scanText}>Scan to Text</Text>
                        </TouchableOpacity>
                    </View>

                    <Carousel />
                    <View style={styles.floderParent}>
                        <Text style={styles.folderText}>Floders</Text>
                        <Image style={{}} source={require('../assets/file.png')} />

                    </View>
                </ScrollView>
                <Footer />
            </LinearGradient>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    wel: {
        fontSize: scale(16),
        fontWeight: '500',
        color: '#9B9B9B'
    },
    goodE: {
        fontSize: scale(30),
        fontWeight: 'bold',
        color: '#000'
    },
    welcParent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: scale(60),
        paddingHorizontal: scale(22),
        marginTop: scale(40)
    },
    topSpace: {
        marginTop: scale(22),
    },
    floderParent: {
        width: '88%',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(22),
        marginBottom: scale(22)
    },
    folderText: {
        color: '#000',
        fontSize: scale(18),
        fontWeight: 'bold'
    },
    scanParent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: scale(22)
    },
    scanText: {
        fontSize: scale(12),
        fontWeight: '700',
        color: '#000',
        marginTop: scale(10)
    }

});