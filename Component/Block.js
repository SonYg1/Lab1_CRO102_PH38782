import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Block = ({ title, children }) => {
  return (
    <View style={styles.block}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    borderRadius: 10,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: 20,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  title: {
    color: '#3498db', // Bạn có thể thay đổi màu sắc thương hiệu tại đây
    marginBottom: 10,
  },
});

export default Block;
