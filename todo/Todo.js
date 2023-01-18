

import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    ImageBackground,
    TouchableOpacity,
    Alert
} from 'react-native'

const Todo = () => {

    const [inputValue, setInputValue] = useState('')
    const [todoArr, setTodoArr] = useState([])
    const [updateInput, setUpdateInput] = useState('')
    const [indexNum, setIndexNum] = useState('')

    const addTodo = () => {
        // Alert.alert('Alert Title', 'My Alert Msg')
        setTodoArr([inputValue, ...todoArr])
        setInputValue('')
    }

    const deleteTodo = (i) => {
        todoArr.splice(i, 1)
        setTodoArr([...todoArr])
    }

    const editTodo = (index) => {
        setIndexNum(index)
    }

    const updateTodo = (i) => {
        todoArr[i] = updateInput
        setTodoArr([...todoArr])
        setIndexNum('')
    }

    return (
        <View style={{ marginTop: 20 }}>
            <Text style={styles.mainHeading}>Todo App</Text>

            <TouchableOpacity onPress={addTodo} style={styles.inputContainer}>
                <TextInput style={[styles.inputStyle, { borderWidth: 2, borderColor: '#F2F2F2' }]}
                    value={inputValue}
                    placeholder='enter todo'
                    onChangeText={(e) => setInputValue(e)}
                />
                <Icon style={styles.btnStyle} size={20} color={'white'} name='add' />
            </TouchableOpacity>



            {
                todoArr?.map((todo, i) => {
                    return <View style={{ alignItems: 'center' }} key={i}>
                        {indexNum === i ?
                            <View style={styles.todosContainer}>
                                <TextInput autoFocus style={[styles.inputStyle, { padding: 0 }]}
                                    value={todo}
                                    placeholder='update todo'
                                    onChangeText={(e) => setUpdateInput(e)}
                                    onBlur={() => setIndexNum('')}
                                />
                                <Icon style={styles.btnStyle} size={20} name='add' onPress={() => updateTodo(i)} />
                            </View>
                            :
                            <View style={styles.todosContainer}>
                                <Text style={{ width: '60%' }} >{todo}</Text>
                                <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                    <Icon style={styles.editIconStyle} size={20} name='edit' onPress={() => editTodo(i)} />
                                    <Icon style={styles.deleteIconStyle} size={20} name='delete' onPress={() => deleteTodo(i)} />
                                </View>
                            </View>
                        }


                    </View>
                })
            }

        </View>
    )
}

export default Todo


const styles = StyleSheet.create({

    mainHeading: {
        fontSize: 30,
        marginBottom: 20,
        textAlign: 'center'
    },

    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputStyle: {
        width: '70%',
        alignItems: 'center',
        margin: 10,
        paddingLeft: 15,
    },

    btnStyle: {
        backgroundColor: '#499bfd',
        color: 'white',
        padding: 12
    },

    todosContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        width: '85%',
        justifyContent: 'space-between',
        paddingLeft: 7,
        marginBottom: 10
    },

    deleteIconStyle: {
        backgroundColor: 'red',
        color: 'white',
        padding: 12,
    },

    editIconStyle: {
        backgroundColor: 'green',
        color: 'white',
        padding: 12,
    }
})