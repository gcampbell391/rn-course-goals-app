import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Button, Text } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'


export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  const [showInputModal, setShowInputModal] = useState(false)

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoal = () => {
    if (enteredGoal.length === 0) {
      alert('Please enter a goal')
      return
    }
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }])
    setShowInputModal(false)
    setEnteredGoal('')
  }

  const removeGoal = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId)
    })
  }


  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Goal Getter</Text>
      <Text style={styles.about}>Add a goal by clicking the button below</Text>
      <Text style={styles.about}>Delete a goal by clicking said goal</Text>
      <Text style={styles.about}>Created by GC3</Text>
      <Button title='Add New Goal' onPress={() => setShowInputModal(true)} />
      <GoalInput enteredGoal={enteredGoal} addGoal={addGoal} goalInputHandler={goalInputHandler} showInput={showInputModal} cancelAdd={() => setShowInputModal(false)} />
      <FlatList data={courseGoals} renderItem={itemData => <GoalItem id={itemData.item.key} title={itemData.item.value} onDelete={removeGoal} />} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: 'yellow',
    height: '100%'

  },
  header: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 30,
    color: '#80d8ff',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  about: {
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 5,

  }
});
