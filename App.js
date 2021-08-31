import React from 'react';
import {Dimensions, View} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const appendZero = month < 10 ? 0 : '';
  const uri = `https://www.tamildailycalendar.com/tamil_monthly_calendar.php?month=${appendZero}${month}&year=${year}`;
  return (
    <View style={{height: Dimensions.get('window').height}}>
      <WebView
        source={{
          uri,
        }}
      />
    </View>
  );
};

export default App;
