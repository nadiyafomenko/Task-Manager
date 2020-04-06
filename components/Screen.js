import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, ScrollView} from 'react-native';

import Modal from 'react-native-modal';


let id = 0;

const Todo = props => (
    <View style = {ToDoItemstyles.todoConatainer}>
      <Text style = {ToDoItemstyles.description}>{props.todo.description}</Text>
      <TouchableHighlight 
        onPress={props.onDelete} style = {ToDoItemstyles.TodoItemButton}  >
        <Text style = {ToDoItemstyles.TodoItemButtonText} > delete </Text>
      </TouchableHighlight>
      <View style = {ToDoItemstyles.DedlineContainer}>
        <Text style = {ToDoItemstyles.DedlineText}>Deadline:</Text>
        <Text style = {ToDoItemstyles.DedlineText}>{props.todo.day}.{props.todo.month}.{props.todo.year}</Text>
      </View>
    </View>
  )

export default class Screen extends React.Component{
    constructor(){
        super()
            this.state = {
                isModalVisible: false,
                todos: []
              }
    }

    openModal = () =>{
        this.setState({
          isModalVisible: true
        })
      }
    
    closeModal = () => {
        this.setState({
          isModalVisible: false
        })
      }
    
    createToDo = () => {
        id++;
        try{
          if(this.description == undefined) throw new Error("Please enter a task description");
          this.setState({
            todos: [
              ...this.state.todos,
              {
                id:id,
                description: this.description,
                day: this.day,
                month: this.month,
                year: this.year,
                checked: false
              },
            ], 
          })
        } catch (error){
          return(
          alert(error.message)
          )
        }
    
      }
    
      
    removeTodo = (id) => {
        this.setState({
          todos: this.state.todos.filter(todo => todo.id !== id)
        })
      }
    

    render(){
        return(
            <View style={styles.tabScreen}>
                <View style = {styles.sliderHeader}>
                    <Text style={styles.sliderHeadertext}>You have {this.state.todos.length} tasks </Text>
                    <TouchableHighlight style = {styles.sliderButton} onPress={()=>this.openModal()} >
                        <Text style = {styles.sliderButtonText}>+New Task</Text>
                    </TouchableHighlight>
                    <Modal isVisible={this.state.isModalVisible} animationIn="fadeIn" animationOut="fadeOut"  >
              <View style={styles.modal}>
               <View style = {styles.modalHeader}>
                  <Text style = {styles.modalHeaderText}>New Task</Text>
                  <TouchableHighlight onPress={() => this.closeModal()}>
                    <Text style = {styles.crossButton}> &#xd7; </Text>
                  </TouchableHighlight>
               </View>
              <View style={styles.inputContainer}>
                <TextInput 
                style= {styles.textInput} 
                placeholderTextColor = '#525870'
                placeholder = "Type here ..."
                onChangeText={(text) => this.description = text}
                />
              </View>
              <Text style={styles.deadlineHeadline}>Set the deadline</Text>
              <View style={styles.deadlineContainer}>
                <View style = {styles.deadlineDayContainer}>
                  <TextInput 
                  style= {styles.textInput}
                  placeholderTextColor = '#525870' 
                  placeholder = "01" 
                  maxLength={2}
                  onChangeText={(text) => this.day = text}
                   />
                </View>
                <View style = {styles.deadlineMonthContainer}>
                  <TextInput 
                  style= {styles.textInput} 
                  placeholderTextColor = '#525870'
                  placeholder = "01" 
                  maxLength={2}
                  onChangeText={(text) => this.month = text}
                  />
                </View>
                <View style = {styles.deadlineYearContainer}>
                  <TextInput 
                  style= {styles.textInput} 
                  placeholderTextColor = '#525870'
                  placeholder = "2020" 
                  maxLength={4}
                  onChangeText={(text) => this.year = text} 
                  />
                </View>
              </View>
              <TouchableHighlight style = {styles.modalSubmit} onPress={this.createToDo}>
                    <Text style={styles.modalSubmitText} >Done!</Text>
                </TouchableHighlight>
              </View> 
            </Modal>
        </View>
                <ScrollView>
                    {this.state.todos.map(todo => (
                        <Todo
                            onDelete={() => this.removeTodo(todo.id)}
                            todo={todo}
                        />
                    ))}
                </ScrollView>
            </View>
        )
    }
}


const ToDoItemstyles = StyleSheet.create({
    description:{
      color: '#cfcfcf',
      fontWeight: '300',
      fontSize: 16,
    },
    todoConatainer:{
      alignSelf: 'center',
      width: 350,
      height: 100,
      backgroundColor: '#3c435e',
      borderRadius: 5,
      marginTop: 10,
      paddingVertical: 30,
      paddingHorizontal: 10
    },
    TodoItemButton:{
      alignSelf: 'flex-end',
      marginTop: 10,
    },
    TodoItemButtonText:{
      color: '#cfcfcf'
    },
    DedlineContainer:{
      flexDirection: 'row',
      marginTop: -10,
    },
    DedlineText:{
      color: '#cfcfcf',
      marginRight: 10,
      fontSize: 10,
      opacity: 0.6,
    }
  })
  
  const styles = StyleSheet.create({
    tabScreen:{
        backgroundColor: '#5e6375',
        width: '100%',
        height: '100%',
      },

      sliderHeader:{
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      sliderHeadertext:{
        color: '#cfcfcf',
      },
      sliderButton:{
        backgroundColor: '#3c435e',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
      },
      sliderButtonText:{
        color: 'yellow',
        fontSize: 12,
        fontWeight: '300',
        opacity: 0.8
      },
      modal: {
        backgroundColor: '#3c435e',
        height: 400,
        borderRadius: 10,
        paddingLeft: 20,
      },
      modalHeader:{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
      },
      modalHeaderText:{
          color: '#cfcfcf',
          fontSize: 25,
      },
      crossButton:{
        alignSelf:'flex-end',
        fontSize: 50,
        color: '#cfcfcf',
      },
      
textInput:{
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#cfcfcf'
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    width: 300,
  },
  deadlineHeadline:{
    color: '#cfcfcf',
    fontSize: 16,
    marginTop: 45,
  },
  
deadlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deadlineDayContainer:{
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    width: 40,
    marginRight: 10,
  },
  deadlineMonthContainer:{
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    width: 40,
    marginRight: 10,
  },
  
deadlineYearContainer:{
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    width: 60,
    marginRight: 10,
  },
  modalSubmit:{
    marginTop: 30,
    marginLeft: 130,
  },
  modalSubmitText:{
    color: '#cfcfcf',
    fontSize: 26
  },

});
  