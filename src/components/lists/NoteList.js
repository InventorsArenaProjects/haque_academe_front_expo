//--------------- System Components ---------------
import {
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  FlatList,
  Image,
  PermissionsAndroid,
} from 'react-native';
import React from 'react';

//--------------- Custom Components ---------------
import ListContainer from '../commons/containers/ListContainer';
import NoteListItem from '../listItems/NoteListItem';

const NoteList = ({navigation, data, noData}) => {
  return (
    <ListContainer
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        marginBottom: 40,
      }}>
      {data.length !== 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={item => <NoteListItem data={item} key={item.id} navigation={navigation} />}
          keyExtractor={item => item.index}
        />
      ) : !noData ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="blue" />
          <Text style={{fontWeight: 'bold', marginTop: 8}}>Please wait...</Text>
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/no-data.png')}
            style={{height: 50, width: 50}}
          />
          <Text style={{fontWeight: 'bold', marginTop: 8}}>
            No Result Found
          </Text>
        </View>
      )}
    </ListContainer>
  );
};

export default NoteList;
