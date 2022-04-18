import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function SkillCard({text}) {
  return <Text style={styles.skill}>{text}</Text>;
}

const styles = StyleSheet.create({
  skill: {
    textAlign: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#1f1e25',
    fontSize: 20,
    color: '#fff',
    fontWeight: '500',
  },
});
