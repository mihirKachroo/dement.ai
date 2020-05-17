import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import HeaderBar from "../components/HeaderBar";

class Inputs extends Component {
   state = {
     name: '',
      email: '',
      password: '',
      physician: '',
      pre: ''

   }
   handleName = (text) => {
    this.setState({ name: text })
 }
 handlePhysician = (text) => {
  this.setState({ physician: text })
}
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   handlePre = (text) => {
    this.setState({ pre: text })
 }
   login = (email, pass) => {
      alert('Your Account Details Are Now Changed')
   }
   render() {
      return (
         <View style = {styles.container}>
           <HeaderBar pageName={"Your Information"} />

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name - Atticus Finch"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>
                          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Gender - Male"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>
                           <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Age - 78"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Physician Name - Joe Mama (Royal Hospital)"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePhysician}/>

<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Previous Ilnesses - COVID-19"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePre}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email - aFinch@gmail.com"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Phone Number - 123 345 3498"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})
