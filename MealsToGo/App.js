import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

export default function App () {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: 'auto',
        height: 500,
        flexDirection: '',
      }}
    >
      {/* <View
        style={{
          // flex: 1,
          height: 50,
          backgroundColor: 'grey',
          width: 'auto',
        }}
      /> */}
      <View
        style={{
          // flex: 1,
          height: 50,
          backgroundColor: 'green',
        }}
      >
        <Text style={{padding: 10}}>Line:1</Text>
      </View>
      <View
        style={{
          flex: 1,
          height: 100,
          flexGrow: 1,
          backgroundColor: 'blue',
        }}
      >
        <Text style={{padding: 10}}>Line:2</Text>
      </View>

      {/* <View style={{
          // flex: 1,
          height: 50,
          backgroundColor:"grey"
        }} /> */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'lightblue',
  },
});
