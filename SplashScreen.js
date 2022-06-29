import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import ViewSlider from 'react-native-view-slider'

const { width, height } = Dimensions.get('window');

function SplashScreen({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#ddd' }}>
            <ViewSlider
                renderSlides={
                    <>
                        <View style={styles.viewBox}>
                            <Image source={{ uri: 'https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg' }} style={{ height: 400, width }} />
                        </View>
                        <View style={styles.viewBox}><Text>Hello</Text></View>
                        <View style={[styles.viewBox, { position: 'relative' }]}><Text>THREE</Text>
                            <TouchableOpacity style={{ height: 50, width: 150, backgroundColor: 'pink', position: 'absolute', right: 0, bottom: 10, zIndex: 10 }} onPress={() => navigation.navigate('HomeScreen')}>
                                <Text>Click Me</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewBox}><Text>FOUR</Text></View>
                    </>
                }
                style={styles.slider}     //Main slider container style
                height={height}    //Height of your slider
                slideCount={4}    //How many views you are adding to slide
                dots={true}     // Pagination dots visibility true for visibile 
                dotActiveColor='red'     //Pagination dot active color
                dotInactiveColor='gray'    // Pagination do inactive color
                dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
            //The views will slide automatically
            //In Miliseconds
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewBox: {
        paddingHorizontal: 20,

        width: width,
        padding: 10,

        height: height,
        flex: 1,
        // backgroundColor:'lime'
    },
    slider: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    dotContainer: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 15
    }
});

export default SplashScreen;