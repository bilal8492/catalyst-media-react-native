import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Entypo';
import ViewSlider from 'react-native-view-slider'

const { width, height } = Dimensions.get('window');

function SplashScreen({ navigation }) {

    return (
        <View style={{ flex: 1, }}>
            <ViewSlider
                renderSlides={
                    <>
                        <View style={styles.viewBox}>
                            <Image source={require('./assets/splash-1.png')} />
                            <Text style={{ textAlign: 'center', fontSize: scale(16), fontWeight: '500', color: '#000', width: '50%', marginTop: scale(85) }}>Scan anything in HD, wherever you are...</Text>
                            <Text style={{ textAlign: 'center', fontSize: scale(12), fontWeight: '500', color: '#000', width: '70%', marginTop: scale(15), marginBottom: scale(125) }}>Simply launch the AirScan app and scan any document, papers or real world photographs in seconds.</Text>
                        </View>

                        <View style={styles.viewBox}>
                            <Image source={require('./assets/splash-2.png')} />
                            <Text style={{ textAlign: 'center', fontSize: scale(16), fontWeight: '500', color: '#000', width: '60%', marginTop: scale(85) }}>Navigate work documents like a Pro</Text>
                            <Text style={{ textAlign: 'center', fontSize: scale(12), fontWeight: '500', color: '#000', width: '75%', marginTop: scale(15), marginBottom: scale(125) }}>Scan and organize your work documents in structured folders. Scan single or multiple documents in one swift go. Merge scans into PDFs, reorder pages and share them on the fly.</Text>
                        </View>

                        <View style={styles.viewBox}>
                            <Image source={require('./assets/splash-3.png')} />
                            <Text style={{ textAlign: 'center', fontSize: scale(16), fontWeight: '500', color: '#000', width: '65%', marginTop: scale(85) }}>Less time scanning homework = more time for fun</Text>
                            <Text style={{ textAlign: 'center', fontSize: scale(12), fontWeight: '500', color: '#000', width: '75%', marginTop: scale(15), marginBottom: scale(125) }}>Scanning of homework and assignments are a breeze with AirScan. Capture scans, generate PDFs and push them to any app installed on your phone. Its that easy!</Text>
                        </View>

                        <View style={styles.viewBox}>
                            <Image source={require('./assets/splash-4.png')} />
                            <Text style={{ textAlign: 'center', fontSize: scale(16), fontWeight: '500', color: '#000', width: '70%', marginTop: scale(85) }}>Covert Pictures to Text with our next generation offline OCR</Text>
                            <Text style={{ textAlign: 'center', fontSize: scale(12), fontWeight: '500', color: '#000', width: '75%', marginTop: scale(15), marginBottom: scale(125) }}>Leverage our cutting edge machine learning OCR to convert documents to text in seconds with accurate results. Share OCR scans as Doc files or PDFs in seconds</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={{ height: scale(50), width: scale(50), borderRadius: 50, backgroundColor: '#49A6FC', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: scale(20), bottom: scale(100) }}>
                                <Icon name='chevron-right' color='#fff' size={40} />
                            </TouchableOpacity>
                        </View>
                    </>
                }
                style={styles.slider}     //Main slider container style
                height={height}    //Height of your slider
                slideCount={4}    //How many views you are adding to slide
                dots={true}     // Pagination dots visibility true for visibile 
                dotActiveColor='#49A6FC'     //Pagination dot active color
                dotInactiveColor='#9B9B9B'    // Pagination do inactive color
                dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots

            //The views will slide automatically
            //In Miliseconds
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewBox: {
        width: width,
        height: height,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        // backgroundColor:'lime'
    },
    slider: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    dotContainer: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: scale(100),

    }
});

export default SplashScreen;