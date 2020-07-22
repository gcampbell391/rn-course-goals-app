import React from 'react'
import { View, TextInput, Button, StyleSheet, Modal, Text } from 'react-native'

const GoalInput = (props) => {
    return (
        <Modal visible={props.showInput} animationType='slide'>
            <View style={styles.inputContainer}>
                <Text style={styles.inputHeader}>What are you trying to accomplish?</Text>
                <TextInput placeholder="Enter Goal" style={styles.input} onChangeText={props.goalInputHandler} value={props.enteredGoal} />
                <View style={styles.btnContainer}>
                    <Button title="Add" onPress={props.addGoal} />
                    <Button title="Cancel" color="red" onPress={props.cancelAdd} />
                </View>
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
    },
    inputHeader: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 50,
        color: '#80d8ff',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%'
    }
})

export default GoalInput