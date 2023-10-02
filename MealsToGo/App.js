import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

export default function App () {
  return (
    <View
      style={styles.container}

      // style={{
      //   flex: 1,
      //   width: 'auto',
      //   height: 500,
      //   backgroundColor: 'blue',
      //   flexDirection: '',
      // }}
    >
      <View
        style={styles.box1}
        // style={{
        //   flex: 1,
        //   width: 'auto',
        //   height: 100,
        //   backgroundColor: 'red',
        // }}
      />
      <View
        style={styles.box2}
        // style={{
        //   flex: 1,
        //   width: 'auto',
        //   height: 'auto',
        //   flexGrow: 1,
        //   backgroundColor: 'yellow',
        // }}
      >
        <Text style={{color: 'black', margin: 50, fontSize: 30}}>
          Just a test!!!
        </Text>
      </View>
      <View
        style={styles.box3}

        // style={{
        //   flex: 1,
        //   width: 'auto',
        //   height: 100,
        //   backgroundColor: 'green',
        // }}
      />
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    width: 'auto',
    height: 500,
    backgroundColor: 'blue',
    flexDirection:"column"
    // flexDirection:"row"
  },
  box1: {
    flex: 1,
    width: 'auto',
    height: 100,
    backgroundColor: 'red',
    flexGrow:1
  },
  box2: {
    flex: 1,
    width: 'auto',
    height: 100,
    backgroundColor: 'yellow',
    flexGrow: 1,
  },
  box3: {
    flex: 1,
    width: 'auto',
    height: 100,
    backgroundColor: 'green',
    flexGrow: 1,
  },
});
