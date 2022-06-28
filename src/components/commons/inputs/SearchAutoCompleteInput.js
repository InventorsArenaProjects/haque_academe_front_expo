import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, SafeAreaView, FlatList, TouchableOpacity, PermissionsAndroid, Alert } from 'react-native'
import Geolocation from '@react-native-community/geolocation';

const KEY = "AIzaSyAOSjUHbVCVsrOT9xmSdP4ENwJPfJJJFNI";
const SearchAutoCompleteInput = ({ label, placeholder, type, value='', changeListener, changeEndListener, styleInput, styleContainer, logo, errMsg, keyType, predItemStyle, predStyle, getPredData }) => {
    const [val, setVal] = useState(true); 

    const [predictionData, setPredictionData] = useState([]);
    const [selectedAreaName, setSelectedAreaName] = useState('');

    const checkType = (type) => {
        let types = ["default", "number-pad", "decimal-pad", "numeric", "email-address", "phone-pad"];
        return types.indexOf(type) !== -1 ? true : false
    }
    // --------------------------- Get Current Location ---------------------------  
    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Pharmasathi app device location",
                    message:
                        "Pharmasathi needs access to your device location " +
                        "so you can set your current address.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            // Check location granting status
            console.log(granted === PermissionsAndroid.RESULTS.GRANTED);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                // ----------------- Get current location -----------------
                Geolocation.getCurrentPosition(
                    (pos) => {
                        setSelectedAreaName("Your location");
                        setPredictionData([]);
                        getPredData({ 
                            lat: pos.coords.latitude,
                            lng: pos.coords.longitude, 
                            area: "Your location" 
                        })
                    },
                    (error) => {
                        console.log("Something went wront to get current location of user++")
                        Alert.alert(
                            "Please on your location",
                            error.message,
                            [
                                { text: "OK", onPress: () => console.log("OK Pressed") }
                            ]
                        );
                        setSelectedAreaName('');
                    },
                    // { enableHighAccuracy: true, timeout: 50000, maximumAge: 1000 },
                );

            } else {
                Alert.alert(
                    "Please check your permission",
                    "Enable your location permission from your app permissions settings menu",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
                setSelectedAreaName('');
            }

        } catch (err) {
            Alert.alert(
                "Please check your permission",
                "Enable your location permission from your app permissions settings menu",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
            setSelectedAreaName('');
        }
    };

    const searchLocationDetails = async (index) => {
        let selectedArea = predictionData[index];
        if (index !== 0) {
            setSelectedAreaName(selectedArea.description);
            setPredictionData([]);

            let resDetails = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${selectedArea.place_id}&key=${KEY}`);

            let resDetailsdata = await resDetails.json();
            if (resDetailsdata.status === 'OK') {
                if (getPredData && getPredData) {
                    getPredData({ ...resDetailsdata.result.geometry.location, area: selectedArea.description })
                }
            }
        } else {
            await requestLocationPermission();
        }
    }

    const searchLocation = async (inputVal) => {
        console.log("---------------------------- location here ----------------------------")
        try {
            let res = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${inputVal}&types=(cities)&language=en&key=${KEY}`);
            let resData = await res.json();
            if (resData.status === 'OK') {
                const yourLoc = {
                    description: "your location"
                }
                setPredictionData([yourLoc, ...resData.predictions])
            } else {
                setPredictionData([])
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={[styles.wrapper, styleContainer]}>
            {label && <Text>{label}</Text>}
            <View style={[styleInput, errMsg && errMsg !== null && styles.invalidInput, styles.inpWrapper]}>
                {logo ? <View style={styles.inpLogo}>{logo}</View> : <></>}
                <TextInput
                    returnKeyType={keyType ? keyType : "done"}
                    style={styles.input}
                    onChangeText={changeListener ? (value) => {
                        setSelectedAreaName(value.trim())
                        searchLocation(value.trim())
                        changeListener(value.trim())
                        
                        setVal(false)
                    } : (value) => {
                        setSelectedAreaName(value.trim())
                        searchLocation(value.trim())
                        
                        setVal(false)
                    }}
                    onEndEditing={(event)=>{
                        setPredictionData([]);
                        changeEndListener?changeEndListener(event.nativeEvent.text):null
                    }}
                    value={val?value:selectedAreaName}
                    placeholder={placeholder ? placeholder : null}
                    keyboardType={checkType(type) ? type : 'default'}
                />
            </View>
            <SafeAreaView style={[predStyle]}>
                {
                    predictionData.length !== 0 ? predictionData.map((item, index) => (
                        <TouchableOpacity key={index} activeOpacity={0.5} style={[predItemStyle, {
                            paddingHorizontal: "4%",
                            paddingVertical: 13,
                            marginBottom: 2,
                            backgroundColor: "#f5f5f5",
                            marginHorizontal: "1%",
                            borderRadius: 6
                        }]} onPress={() => searchLocationDetails(index)}>
                            <Text style={{ color: "grey", fontWeight: "bold", fontSize: 14 }}>{item.description}</Text>
                        </TouchableOpacity>
                    )) :
                        null
                }
                {/* <FlatList
                    data={predictionData}
                    renderItem={({index, item})=>(
                        <TouchableOpacity activeOpacity={0.5} style={[predItemStyle, {
                            paddingHorizontal: "4%",
                            paddingVertical: 13,
                            marginBottom: 2,
                            backgroundColor: "#f5f5f5",
                            marginHorizontal: "1%",
                            borderRadius: 6
                        }]} onPress={()=>searchLocationDetails(index)}>
                            <Text style={{color: "grey", fontWeight: "bold", fontSize: 14}}>{item.description}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.place_id}
                /> */}
            </SafeAreaView>
            {errMsg && errMsg !== null && <Text style={styles.invalidMsg}>{errMsg}</Text>}
        </View>
    )
}

export default SearchAutoCompleteInput

const styles = StyleSheet.create({
    inpWrapper: {
        backgroundColor: "white",
        width: "100%",
        flexDirection: "row"
    },
    inpLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: "2%"
    },
    input: {
        fontSize: 16,
        paddingHorizontal: 13,
        flex: 1
    },

    invalidInput: {
        borderColor: "red",
        borderWidth: 1
    },
    invalidMsg: {
        color: "red",
        marginHorizontal: 5,
        marginTop: 3
    }
})