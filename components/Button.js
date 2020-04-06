import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

export const Header = (props) => {
    return(
        <TouchableHighlight style = {styles.button}>
            <Text style = {styles.btnText} >+New Task</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'blue',
    }
})