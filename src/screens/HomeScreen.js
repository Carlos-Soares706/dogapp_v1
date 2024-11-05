// src/screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import DogCard from '../components/DogCard';
import { fetchDogs } from '../services/api';

const HomeScreen = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDogs = async () => {
      const data = await fetchDogs();
      setDogs(data);
      setLoading(false);
    };
    loadDogs();
  }, []);

  if (loading) {
    return <Text style={styles.loading}>Carregando...</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={dogs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DogCard name={item.name} image={item.image.url} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40
  },
  loading: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20
  }
});

export default HomeScreen;
