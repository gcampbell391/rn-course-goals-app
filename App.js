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
      <Text style={styles.header}>Goal Conqueror</Text>
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
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 30,
    color: '#80d8ff',
    fontWeight: 'bold'
  }
});
