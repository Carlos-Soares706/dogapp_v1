// src/components/DogCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DogCard = ({ name, image }) => (
  <View style={styles.container}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.name}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default DogCard;
