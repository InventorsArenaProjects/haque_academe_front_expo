import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

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
      const res = await notes(route.params.id);
      // console.log(data);
      console.log(res.status && res.data.data !== null);
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
      <NoteList data={data} noData={noData} />
    </Screen>
  );
};


export default Chapter;
