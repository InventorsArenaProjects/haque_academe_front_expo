import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  Text
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { notes } from '../helpers/Request';

import Header from '../components/Header';
import Screen from '../components/Screen';

import NoteList from '../components/lists/NoteList'

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const Chapter = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  const [noData, setNoData] = useState(false);

  const retriveNotes = async () => {
    try {
      let teacher_id = await AsyncStorage.getItem('teacher_id');
      const res = await notes(teacher_id,route.params.id);

      if (res.status && res.data.data !== null) {
        setData(res.data.data);
        setNoData(false);
      } else {
        setData([]);
        setNoData(true);
      }
    } catch (error) {
      setData([]);
      setNoData(true);
    }
  };

  useEffect(() => {
    retriveNotes();
  }, []);

  return (
    <Screen>
      <Header
        pageName="Chapter"
        iconName="arrow-back"
        navLink={() => navigation.goBack()}
      />
      <NoteList data={data} noData={noData} navigation={navigation} />
    </Screen>
  );
};


export default Chapter;
