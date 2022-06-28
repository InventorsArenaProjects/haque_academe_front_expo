import React, { useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';

const { width } = Dimensions.get("window");
const height = width * 0.4;


const Slider = ({sliderImage}) => {
    const [active, setActive] = useState(0);

    const change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== active) {
            setActive(slide);
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView
                pagingEnabled
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.scroll}
                onScroll={change}
            >
                {
                    sliderImage.map((post, i) => (
                        <Image
                            key={i}
                            resizeMode="cover"
                            source={{uri: post.image}}
                            style={styles.image} />
                    ))

                }
            </ScrollView>
            <View style={styles.pagination}>
                {
                    sliderImage.map((i, k) => (
                        <Text key={k} style={k == active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { marginTop: 2, width, height, justifyContent: 'center', alignItems: 'center' },
    scroll: { width: width / 1.1, height },
    image: { width: width / 1.1, height, resizeMode: 'cover', borderRadius: 6 },
    pagination: { flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' },
    pagingText: { fontSize: width / 30, color: "#888", margin: 3 },
    pagingActiveText: { fontSize: width / 30, color: "#c7c9ff", margin: 3 },
})


export default Slider;