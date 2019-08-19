import React from 'react'

import { View, Text, Image,AsyncStorage,TouchableOpacity } from 'react-native'

import { SafeAreaView } from 'react-navigation';

import { TextField } from 'react-native-material-textfield'
import { Icon, Toast } from 'native-base';


const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default class SignUp extends React.Component {

    constructor() {
        super()
        this.state = {
            userName: '',
            email: '',
            password: '',
            usertype: '',
        }
    }



    SignUp(){

        let username = this.state.userName
        let email = this.state.email
        let password = this.state.password
        let userType = this.state.usertype

        if (username === '' || password === '' || email === '') {
            Toast.show({
                text: 'Please enter details',
                buttonText: 'okay', duration: 3000
            })
           
            return;
        }

        if (reg.test(email) === false) {
            Toast.show({
                text: 'Invalid email',
                buttonText: 'okay', duration: 3000
            })
            return;
        }

        this.storeItem(username,email,password)

    }

    async storeItem(username,email,password) {
        try {
            await AsyncStorage.setItem('USERNAME', username);
            await AsyncStorage.setItem('EMAIL', email);
            await AsyncStorage.setItem('PASSWORD', password);

            this.props.navigation.navigate('LoginPage')
        } catch (error) {
          console.log(error.message);
        }
      }


    render() {
        return (
            <SafeAreaView style={{ padding: 10 }}>

                <Image style={{ padding: 10, alignSelf:'center' }}
                    source={require('../assets/notification.png')}></Image>
                <Text style={{ padding: 10,alignSelf:'center' }}>Welcome! Join Trial</Text>

                <Text style={{ padding: 10, alignSelf:'center' }}>Sign up with</Text>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, backgroundColor: '#3b5998', borderRadius: 4, margin: 10 }}>
                        <TouchableOpacity style={{ alignSelf: 'center', padding: 10 }}>
                            <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>{" FACEBOOK "}</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flex: 1, backgroundColor: '#ea4335', borderRadius: 4, margin: 10 }}>
                        <TouchableOpacity style={{ alignSelf: 'center', padding: 10 }}>
                            <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>{"GOOGLE  "}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginLeft: 10, marginRight: 10 }}>
                    <TextField
                        label='Username'
                        value={this.state.userName}
                        onChangeText={(userName) => this.setState({ userName })}
                    />
                </View>

                <View style={{ marginLeft: 10, marginRight: 10 }}>
                    <TextField
                        autoCapitalize='none'
                        label='Email'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                    />
                </View>

                <View style={{ marginLeft: 10, marginRight: 10 }}>
                    <TextField
                        autoCapitalize='none'
                        label='Password'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                </View>


                <View style={{ marginTop: 50, margin: 10, }}>
                    <TouchableOpacity
                    onPress={this.SignUp.bind(this)} 
                    style={{ backgroundColor: '#3b5998', borderRadius: 4, padding: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>{" SIGN UP "}</Text>
                    </TouchableOpacity>
                    {/* <Text style={{ alignSelf: 'flex-end', paddingTop: 10 }}>FORGOT PASSWORD</Text> */}
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40 }}>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.goBack()}
                    style={{flexDirection:'row'}}>
                        <Icon style={{ padding: 10, alignSelf: 'center', }} name='arrow-back' />
                        <Text style={{ alignSelf: 'center' }}>Go back</Text>
                    </TouchableOpacity>
                </View>



            </SafeAreaView>
        )
    }
} 
