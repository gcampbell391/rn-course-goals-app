import React from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = (props) => {
    return (
        <Modal visible={props.showInput} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Enter Course Goal" style={styles.input} onChangeText={props.goalInputHandler} value={props.enteredGoal} />
                <Button title="Add" onPress={props.addGoal} />
                <Button title="Cancel" color="red" onPress={props.cancelAdd} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '70%',
        marginBottom: 10,
        backgroundColor: 'white'
    }
})

export default GoalInput