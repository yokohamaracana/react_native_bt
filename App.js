import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import IconOcticon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';

const App = () => {
  const renderItem = ({ item }) => (
    <View style={{ backgroundColor: "#87CEFA", marginBottom: 10,  }}>
      <Text style={{ fontSize: 28, padding: 5}}>Id: {item.id}</Text>
      <Text style={{ fontSize: 20, padding: 5}}>Name: {item.name}</Text>
      <Text style={{ fontSize: 20, padding: 5}}>Email: {item.email}</Text>
      <Text style={{ fontSize: 20, padding: 5}}>Gender: {item.gender}</Text>
      <Text style={{ fontSize: 20, padding: 5}}>Status: {item.status}</Text>
    </View>
  );

  const [mydata, setData] = useState([])
  useEffect(() => {
    getData()
    return () => {
    }
  }, [])
  var getData = async () => {
    var api = await axios.get('https://gorest.co.in/public/v2/users')
    setData(api.data)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <IconOcticon name="heart" color={'red'} size={50} style={{ textAlign: 'center', marginBottom: 20 }} />
      </View>
      <FlatList
        data={mydata}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    padding: 20,
  },
  item: {
    backgroundColor: '#008000',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;