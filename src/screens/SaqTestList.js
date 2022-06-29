// ----------- System Components -----------
import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions, Text} from 'react-native';

// ----------- Third Party Components -----------
import Octicons from 'react-native-vector-icons/Octicons';
// ----------- Custom Components -----------
import Header from '../components/Header';
import DesTestList from '../components/lists/DesTestList';
import {saqtest} from '../helpers/Request';

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const SaqTestList = ({navigation, route}) => {
  const subjectId = route.params.subjectId;

  const [noData, setNoData] = useState(false);
  const [data, setData] = useState([]);

  const retriveSubjects = async () => {
    try {
      const data = await saqtest(subjectId);
      console.log(subjectId);
      console.log('------------ BOOM SUBJECTS -------------');
      if (data.status && data.data.data !== null) {
        setData(data.data.data);
        // console.warn("HIhihihihihihihihi!");
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
    retriveSubjects();
  }, []);

  return (
    <>
      <Header
        pageName="Select SAQ Test"
        iconName="arrow-back"
        navLink={() => navigation.goBack()}
      />
      <DesTestList data={data} noData={noData} />
    </>
  );
};

export default SaqTestList;

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 10,
    marginBottom: '80%',
    backgroundColor: '#ffff',
    // padding:'10%',
    height: '100%',
    // backgroundColor: 'yellow',
  },

  box: {
    height: 246,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#9E1510',
    marginTop: '3%',
    padding: 5,
  },
  modelbox: {
    height: '50%',
    width: '40%',
    backgroundColor: '#9E1510',

    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  modeltext: {
    textAlign: 'center',
    marginTop: '2%',
    color: '#fff',
  },
  subbox: {
    height: '25%',
    width: '60%',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#A11A0E',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  //   boxtext: {
  //     color: 'black',
  //     fontSize: 17,
  //     textAlign: 'center',
  //     marginTop: '3.5%',
  //   },
});
