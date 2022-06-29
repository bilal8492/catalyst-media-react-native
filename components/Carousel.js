import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { scale } from 'react-native-size-matters';
import ViewSlider from 'react-native-view-slider'
const Carousel = () => {
    const data = [
        {
            id: 1,
            day: '1d ago',
            img: require('../assets/img-1.png')
        },
        {
            id: 2,
            day: '2d ago',
            img: require('../assets/img-2.png')
        },
        {
            id: 3,
            day: '3d ago',
            img: require('../assets/img-3.jpg')
        },
        {
            id: 4,
            day: '1d ago',
            img: require('../assets/img-4.jpg')
        },
    ]
    return (
        <View>
            <View style={{ marginLeft: scale(22), marginTop: scale(20), marginBottom: scale(14) }}><Text style={{ fontSize: scale(18), fontWeight: 'bold', color: '#000' }}>Recent Scans</Text></View>
            <ViewSlider
                renderSlides={
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        {
                            data.map((data) => {
                                return (

                                    <View key={data.id} style={styles.imgParent}>
                                        <Image style={{ height: scale(190), width: scale(190), borderRadius: 10, resizeMode: 'cover' }} source={data.img} />
                                        <View style={{ height: 22, minWidth: 50, borderRadius: 5, backgroundColor: '#49A6FC', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 13, left: 12 }}><Text style={{ color: '#fff', fontWeight: '500', fontSize: 12 }}>{data.day}</Text></View>
                                    </View>
                                )
                            })
                        }

                    </View>
                }
                style={styles.slider}
                slideCount={5}
            />
        </View>
    )
}

export default Carousel;

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
    }
});