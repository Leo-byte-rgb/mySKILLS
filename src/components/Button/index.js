import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

export default function Button({text, ...props}) {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 17,
  },
});
