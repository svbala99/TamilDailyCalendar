import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  Platform,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

const App = () => {
  const [date, setDate] = useState(new Date());
  const [mode] = useState('date');
  const [uri, setUri] = useState(
    'https://www.tamildailycalendar.com/2021/20062021.jpg',
  );
  const [show, setShow] = useState(false);
  // const [dt, setDt] = useState(new Date().toLocaleString());

  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios');
    if (!selectedDate) {
      return;
    }
    const year = date.getFullYear();
    const day = date.getDate();
    const rawMonth = Number(date.getMonth());
    const month = rawMonth < 10 ? `${rawMonth + 1}` : rawMonth + 1;
    setUri(
      `https://www.tamildailycalendar.com/${year}/${day}${month}${year}.jpg`,
    );
    setDate(selectedDate);
  };

  useEffect(() => {
    const year = date.getFullYear();
    const day = date.getDate();
    const rawMonth = Number(date.getMonth());
    const month = rawMonth < 10 ? `0${rawMonth + 1}` : rawMonth + 1;
    setUri(
      `https://www.tamildailycalendar.com/${year}/${day}${month}${year}.jpg`,
    );
  }, [date]);

  // useEffect(() => {
  //   let secTimer = setInterval(() => {
  //     setDt(new Date().toLocaleString());
  //   }, 1000);

  //   return () => clearInterval(secTimer);
  // }, [dt]);

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        locations={[0, 0.8, 1.2]}
        colors={['#AB88C8', '#208AB4', '#30F5D3']}>
        <Text
          style={{
            marginTop: 24,
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
          }}>
          தமிழ் தினசரி தேதி நாள்காட்டி
        </Text>
        {console.log(uri, date)}
        {date && <Image style={styles.image} source={{uri: uri}} />}
        {show && (
          <>
            <DateTimePicker
              value={date}
              mode={mode}
              display="default"
              onChange={onChange}
              minimumDate={new Date(2005, 1, 1)}
              maximumDate={new Date(2022, 1, 1)}
            />
          </>
        )}
        {!show && (
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row', marginBottom: 32}}>
              <TouchableHighlight onPress={showDatepicker}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1.2, y: 0}}
                  colors={['#AB88C8', '#e5dbee']}
                  style={styles.linearGradient}>
                  <Text style={styles.buttonText_1}>
                    தேதியை இங்கே உள்ளிடவும்
                  </Text>
                </LinearGradient>
              </TouchableHighlight>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableHighlight
                onPress={() => {
                  setDate(moment(date).subtract(1, 'day').toDate());
                }}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#30F5D3', '#208AB4', '#AB88C8']}
                  style={styles.linearGradient}>
                  <Text style={styles.buttonText}>{'<< முந்தைய நாள்'}</Text>
                </LinearGradient>
              </TouchableHighlight>
              <View style={{width: 16}} />
              <TouchableHighlight
                onPress={() => setDate(moment(date).add(1, 'day').toDate())}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#AB88C8', '#208AB4', '#30F5D3']}
                  style={styles.linearGradient}>
                  <Text style={styles.buttonText}>{'அடுத்த நாள் >>'}</Text>
                </LinearGradient>
              </TouchableHighlight>
            </View>
            <View style={{height: 260}} />
          </View>
        )}
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
  },
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('window').height / 2,
    resizeMode: 'contain',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    padding: 8,
    borderRadius: 16,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },
  buttonText_1: {
    fontSize: 18,
    textAlign: 'center',
    color: '#208AB4',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },
});

export default App;


// import React from 'react';
// import {Dimensions, View} from 'react-native';
// import {WebView} from 'react-native-webview';

// const App = () => {
//   return (
//     <View style={{height: Dimensions.get('window').height}}>
//       <WebView
//         source={{
//           uri: 'https://www.tamildailycalendar.com/tamil_monthly_calendar.php?month=07&year=2021&&msg=Tamil%20Monthly%20Calendar%202021',
//         }}
//       />
//     </View>
//   );
// };

// export default App;

import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  Platform,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

const App = () => {
  const [date, setDate] = useState(new Date());
  const [mode] = useState('date');
  const [uri, setUri] = useState(
    'https://www.tamildailycalendar.com/2021/20062021.jpg',
  );
  const [show, setShow] = useState(false);
  const [dt, setDt] = useState(new Date().toLocaleString());
  const [isDay, setIsDay] = useState(true);

  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios');
    if (!selectedDate) {
      return;
    }
    const year = date.getFullYear();
    const day = date.getDate();
    const rawMonth = Number(date.getMonth());
    const month = rawMonth < 10 ? `${rawMonth + 1}` : rawMonth + 1;
    setUri(
      `https://www.tamildailycalendar.com/${year}/${day}${month}${year}.jpg`,
    );
    setDate(selectedDate);
  };

  useEffect(() => {
    const year = date.getFullYear();
    const day = date.getDate();
    const rawMonth = Number(date.getMonth());
    const month = rawMonth < 10 ? `0${rawMonth + 1}` : rawMonth + 1;
    setUri(
      `https://www.tamildailycalendar.com/${year}/${day}${month}${year}.jpg`,
    );
  }, [date]);

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(moment().format('h:mm:ss A'));
    }, 1000);

    Number(new Date().getHours()) >= 12 ? setIsDay(false) : setIsDay(true);

    return () => clearInterval(secTimer);
  }, [dt]);

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        locations={[0, 0.8, 1.2]}
        // colors={['#AB88C8', '#208AB4', '#30F5D3']}
        colors={
          isDay
            ? ['#FEE197', '#E6B15D', '#634C22']
            : ['#01122B', '#19568B', '#ECF3E7']
        }>
        <Text
          style={{
            marginTop: 24,
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            color: isDay ? '#634C22' : '#ECF3E7',
          }}>
          தமிழ் தினசரி நாள்காட்டி
        </Text>
        <Text
          style={{
            marginTop: 24,
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            color: isDay ? '#634C22' : '#ECF3E7',
          }}>
          {Number(new Date().getHours()) >= 12 ? 'மாலை ' : 'காலை '}
          {dt}
        </Text>
        {date && <Image style={styles.image} source={{uri: uri}} />}
        {show && (
          <>
            <DateTimePicker
              value={date}
              mode={mode}
              display="default"
              onChange={onChange}
              minimumDate={new Date(2005, 1, 1)}
              maximumDate={new Date(2022, 1, 1)}
            />
          </>
        )}
        {!show && (
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row', marginBottom: 32}}>
              <TouchableHighlight onPress={showDatepicker}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1.2, y: 0}}
                  // colors={['#AB88C8', '#e5dbee']}
                  colors={
                    isDay
                      ? ['#FEE197', '#E6B15D', '#634C22']
                      : ['#01122B', '#19568B', '#ECF3E7']
                  }
                  style={styles.linearGradient}>
                  <Text style={styles.buttonText_1}>
                    தேதியை இங்கே உள்ளிடவும்
                  </Text>
                </LinearGradient>
              </TouchableHighlight>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableHighlight
                onPress={() => {
                  setDate(moment(date).subtract(1, 'day').toDate());
                }}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  // colors={['#30F5D3', '#208AB4', '#AB88C8']}
                  colors={
                    isDay
                      ? ['#FEE197', '#E6B15D', '#634C22']
                      : ['#01122B', '#19568B', '#ECF3E7']
                  }
                  style={styles.linearGradient}>
                  <Text style={styles.buttonText}>{'<< முந்தைய நாள்'}</Text>
                </LinearGradient>
              </TouchableHighlight>
              <View style={{width: 16}} />
              <TouchableHighlight
                onPress={() => setDate(moment(date).add(1, 'day').toDate())}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  // colors={['#AB88C8', '#208AB4', '#30F5D3']}
                  colors={
                    isDay
                      ? ['#FEE197', '#E6B15D', '#634C22']
                      : ['#01122B', '#19568B', '#ECF3E7']
                  }
                  style={styles.linearGradient}>
                  <Text style={styles.buttonText}>{'அடுத்த நாள் >>'}</Text>
                </LinearGradient>
              </TouchableHighlight>
            </View>
            <View style={{height: 240}} />
          </View>
        )}
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
  },
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('window').height / 2,
    resizeMode: 'contain',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    padding: 8,
    borderRadius: 16,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },
  buttonText_1: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },
});

export default App;
