import React from 'react';
import { ImageBackground, Text, View, YellowBox } from 'react-native';

console.ignoredYellowBox = ['Remote debugger'];

YellowBox.ignoreWarnings([
  "Accessing view manager configs directly off UIManager via UIManager['getConstants'] is no longer supported. Use UIManager.getViewManagerConfig('getConstants') instead."
]);

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../../assets/background.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '60%',
              height: '10%',
              backgroundColor: '#022F40',
              border: 'solid',
              borderColor: 'white',
              borderWidth: 3,
              borderRadius: 30
            }}
          >
            <Text
              style={{
                color: '#FFFFFF',
                fontStyle: 'italic',
                fontWeight: 'bold',
                fontSize: 30
              }}
            >
              Face Up !
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
