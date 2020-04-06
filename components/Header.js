import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet, Switch, Image } from 'react-native';

import Modal from 'react-native-modal';

export default class Header extends React.Component {
    constructor(){
        super()
        this.state ={
          isModalVisible: false,
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

    render(){
        return (
            <View style = { styles.header }>
                <Text style= {styles.h1}>Task Manager</Text>
                <TouchableHighlight style = {styles.button} onPress={()=>this.openModal()} >
                    <Text style={styles.btnText}>Settings</Text>
                </TouchableHighlight> 
                <View style = {styles.line}></View> 

                <Modal isVisible={this.state.isModalVisible} animationIn="fadeIn" animationOut="fadeOut" >
                <View style={styles.modal}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalHeaderText}>Settings</Text>
                        <TouchableHighlight onPress={() => this.closeModal()}>
                            <Text style = {styles.crossButton}> &#xd7; </Text>
                        </TouchableHighlight>
                    </View>
                    <View style = {styles.settingRow}>
                        <Text style = {styles.settingsHeadline}>Dark mode</Text>
                        <Switch
                            trackColor={{ false: "#cfcfcf", true: "yellow" }}
                            ios_backgroundColor="#3e3e3e"
                        />
                    </View>
                    <View style = {styles.settingRow}>
                        <Text style = {styles.settingsHeadline}>Notifications</Text>
                        <Switch
                            trackColor={{ false: "#cfcfcf", true: "yellow" }}
                            ios_backgroundColor="#3e3e3e"
                        />
                    </View>
                    <View style = {styles.settingRow}>
                        <Text style = {styles.settingsHeadline}>Language</Text>
                        <Text style = {styles.settingsHeadline} >uk/en</Text>
                    </View>
                    <Text style = {styles.loginHeadline}>Login with</Text>
                    <View style = {styles.loginRow}>
                        <TouchableHighlight>
                            <Image
                                source={require('../assets/account.png')}
                                style={styles.ImageIconStyle}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <Image
                                source={require('../assets/facebook.png')}
                                style={styles.ImageIconStyle}
                            />
                        </TouchableHighlight>
                    </View>
                    <TouchableHighlight onPress={() => this.closeModal()}>
                            <Text style = {styles.SubmitButton}>Submit</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
            </View>
            )
    }
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        alignSelf: 'flex-start',
        width: '100%',
        justifyContent: 'space-around',
        marginRight: 40,
    },
    h1: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',

    },
    button: {
        marginTop: -25,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText:{
        color: '#fff',
    },
    line: {
        backgroundColor: 'white',
        width: 370,
        marginTop: 30,
        alignSelf: 'flex-start',
        height: 1,
        opacity: 0.2,
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
      settingsHeadline:{
          color: '#cfcfcf',
          fontSize: 16,
      },
      settingRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 30,
      },
      loginHeadline:{
        color: '#cfcfcf',
        fontSize: 25, 
        marginTop: 20,
        alignSelf: 'center'
      },
      loginRow:{
          flexDirection: 'row',
          marginLeft: 120,
          marginTop: 20
      },
      ImageIconStyle:{
          marginRight: 50,
      },
      SubmitButton:{
          alignSelf: 'flex-end',
          color: 'yellow',
          fontSize: 25,
          opacity: 0.8,
          marginRight: 30,
          marginTop: 20,
      }
})