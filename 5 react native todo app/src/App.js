import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Alert, FlatList,} from 'react-native';
import ShowActiveToDos from './components/toDoApp/showActiveToDos';
import SubmitToDos from './components/toDoApp/submitToDos';
import ToDos from './components/toDoApp/toDos';

const toDoApp = () => {

  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [id, setId] = useState(0);

  const renderToDos = ({item}) => 
  <ToDos 
  toDos={item}
  changeIsActive={changeIsActive}
  deleteToDo={deleteToDo}/>

  const submitToDo = () => {
    if(text){
      setId(id + 1);
      setData([...data, {id: id, text: text, isActive: true}]);
      setText('');
    }
  };
  
  const changeIsActive = (id) => {
    const newTodoList = data.map(todo => {
      if(todo.id === id){
        todo.isActive = !todo.isActive;
      }
      return todo;
    });
    setData(newTodoList);
  };

  const deleteToDo = (id) => {
    Alert.alert(
      'Are you sure...',
      'You want to delete this object?',
      [
        {
          text: 'Yes',
          onPress: () => {
            const newTodoList = data.filter(todo => todo.id !== id);
            setData(newTodoList);
          }
        },
        {
          text: 'No',
        }
      ]
    )
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ShowActiveToDos toDos={data}/>
      </View>
      <View style={styles.body}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={renderToDos}
        />
      </View>
      <View style={styles.footer}>
        <SubmitToDos
          setText={setText}
          text={text}
          submitToDo={submitToDo}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'rgb(53, 60, 83)',
  },

  header: {
    flex: 2,
  },

  body: {
    flex: 10,
    alignItems: 'center',
  },

  footer: {
    flex: 3,
  },

})

export default toDoApp;
