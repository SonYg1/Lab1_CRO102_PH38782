import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

const TextInput = (props) => {
  return <RNTextInput style={styles.textInput} {...props} />;
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    borderColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginBottom: 10,
  },
});

export default TextInput;
