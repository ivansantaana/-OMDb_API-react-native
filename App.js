import React , { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  const [value, onChangeText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [searchResult, setSearchResult] = useState({});
  const [isLoading, setLoadingVisible] = useState(false);

  const onPress = () => {
    setModalVisible(true);
    setLoadingVisible(true);
    getMoviesFromApiAsync();
  }

  async function getMoviesFromApiAsync() {
    try {
      let response = await fetch('http://www.omdbapi.com/?apikey=3745c793&t=' + value);
      
      let json = await response.json();
      setSearchResult(json);
      setLoadingVisible(false);
        console.log(json)
    } catch (error) {
        console.error(error);
      }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> OMDb API </Text>
        <Text>The Open Movie Database</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        ><Text>Search</Text>
        </TouchableOpacity>
    </View> 
  );
};
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center'
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 48,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'stretch',
    margin: 10,
    padding: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#4CB53D",
    margin: 10,
    padding: 10,
    alignSelf: 'stretch'
    }
});