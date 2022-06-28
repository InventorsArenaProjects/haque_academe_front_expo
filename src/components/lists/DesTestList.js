//--------------- System Components ---------------
import { View, Text, StatusBar, ActivityIndicator, FlatList, Image } from 'react-native'
import React from 'react'

//--------------- Custom Components --------------- 
import ListContainer from '../commons/containers/ListContainer'
import DesTestListItem from '../listItems/DesTestListItem'

const DesTestList = ({ data, noData }) => {
    
    return (
        <ListContainer style={{
            flex: 1,
            marginTop: StatusBar.currentHeight || 0
        }}>
            {data.length !== 0 ?
                <FlatList
                    data={data}
                    renderItem={(item) => (<DesTestListItem data={item} key={item.id} />)}
                    keyExtractor={(item) => item.index}
                /> :
                !noData ?
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <ActivityIndicator size="large" color="blue" />
                        <Text style={{ fontWeight: "bold", marginTop: 8 }}>Please wait...</Text>
                    </View>
                    :
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Image source={require('../../assets/no-data.png')} style={{ height: 50, width: 50 }} />
                        <Text style={{ fontWeight: "bold", marginTop: 8 }}>No Result Found</Text>
                    </View>
            }
        </ListContainer>
    )
}

export default DesTestList