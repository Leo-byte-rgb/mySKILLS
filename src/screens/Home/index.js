import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import Button from '../../components/Button';
import SkillCard from '../../components/SkillCard';

export default function Home() {
  const [text, setText] = useState('');
  const [skills, setSkills] = useState([]);

  const handleNewSkill = () => {
    if (!text.trim()) {
      return;
    }
    setSkills(previus => [...previus, text]);
    setText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello Leo</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={v => setText(v)}
        value={text}
      />
      <Button text="Add" onPress={handleNewSkill} />
      <Text style={styles.skills}>My Skills</Text>

      <ScrollView style={styles.list}>
        {skills.map((skill, i) => (
          <SkillCard text={skill} key={i} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 40,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    marginTop: 20,
    paddingHorizontal: 10,
    color: '#fff',
    borderRadius: 5,
  },
  skills: {
    color: '#fff',
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 24,
  },

  list: {
    flex: 1,
  },
});
