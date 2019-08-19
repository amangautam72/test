import React from 'react'

import { View, StyleSheet, Text, Image, AsyncStorage, TouchableOpacity, BackHandler } from 'react-native'
//import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';

import { TextField } from 'react-native-material-textfield'
import { Icon, Toast } from 'native-base';

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default class LoginPage extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            // loading: false
        }
    }


    async componentDidMount() {
        let loggedIn = await AsyncStorage.getItem('LOGGEDIN');

        console.log("ASYSNSNSYSSY  : " + loggedIn)
        if (loggedIn != null) {
            if (loggedIn)
                this.props.navigation.navigate('Navigator')
        }
    }


    signIn() {
        let email = this.state.email
        let password = this.state.password


        if (password === '' || email === '') {
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

        this.login(email,password)
    }

    async login(email,password) {
        try {
            var asyncemail = await AsyncStorage.getItem('EMAIL');
            var asycnpassword = await AsyncStorage.getItem('PASSWORD');

            
            if(asyncemail == null && asycnpassword == null){
                Toast.show({
                    text: 'You have not registered yet, Please register',
                    buttonText: 'okay', duration: 3000
                })
                return
            }

          
            if(email == asyncemail && password == asycnpassword){
                Toast.show({
                    text: 'You have successfully logged in',
                    buttonText: 'okay', duration: 3000
                })
                this.props.navigation.navigate('Home')
            }else{
                Toast.show({
                    text: 'Invalid email or password',
                    buttonText: 'okay', duration: 3000
                })
            }
            
        } catch (error) {
          console.log(error.message);
          Toast.show({
            text: 'Something went wrong',
            buttonText: 'okay', duration: 3000
        })
        }
      }

    render() {
        return (
            <SafeAreaView style={{ padding: 10 }}>


                <Image style={{ padding: 10, alignSelf:'center' }}
                    source={require('../assets/notification.png')}></Image>
                <Text style={{ padding: 10, alignSelf:'center' }}>Welcome</Text>

                <Text style={{ padding: 10 }}>Sign in to Trial</Text>

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
                        autoCapitalize='none'
                        label='Email or username'
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
                        onPress={this.signIn.bind(this)}
                        style={{ backgroundColor: '#3b5998', borderRadius: 4, padding: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>{" CONTINUE "}</Text>
                    </TouchableOpacity>
                    <Text style={{ alignSelf: 'flex-end', paddingTop: 10 }}>FORGOT PASSWORD</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40 }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SignUp')}
                        style={{ flexDirection: 'row' }}>
                        {/* <Icon style={{ padding: 10, alignSelf: 'center', }} name='arrow-back' /> */}
                        <Text style={{ alignSelf: 'center' }}>{'Not Registered ? click here '}</Text>
                    </TouchableOpacity>
                </View>


            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    modal: {
        borderRadius: 5,
        marginLeft: 50, marginRight: 50, marginTop: 60, marginBottom: 60,
        backgroundColor: '#fff', padding: 15, paddingLeft: 20, paddingRight: 20


    },
});
