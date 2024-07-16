import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Banner = ({ uri_img, title }) => {
  return (
    <View style={styles.khung}>
      <Image style={styles.img} source={{ uri: uri_img }} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  khung: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 20,
  },
  title: {
    color: 'blue',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  img: {
    width: '100%',
    height: 100,
  },
});

export default Banner;
