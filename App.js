import React , { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
  const [value, onChangeText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [searchResult, setSearchResult] = useState({});
  const [isLoading, setLoadingVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> OMDb API </Text>
        <Text>The Open Movie Database</Text>
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
  }
});