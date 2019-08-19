import React from 'react'


import { AsyncStorage, BackHandler } from 'react-native'
import { createAppContainer, createStackNavigator} from 'react-navigation'
import { Toast } from 'native-base';

import Home from '../containers/Home';
import LoginPage from '../containers/LoginPage';
import SignUp from '../containers/SignUp';


export default class AppNavigator extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentRoute: '',
            index: 0,

        }

        this.handleBackPress = this.handleBackPress.bind(this);
    }

    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);       
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress() {

        if (this.state.currentRoute.routeName == 'Home') {
            BackHandler.exitApp();
            return true;
        }

    }


   
    getCurrentRouteName(navigationState) {
        if (!navigationState) {
            return null;
        }
        const route = navigationState.routes[navigationState.index];
        
        this.setState({
            currentRoute: route,
            index: route.index
        })

     
        // return route.routeName;
    }


    render() {
       
        return (
            
            <Container onNavigationStateChange={(prevState, currentState) => 
                this.getCurrentRouteName(currentState)
            }>
            </Container>

        )
    }
}


const Navigator = createStackNavigator({

    LoginPage: {
        screen: LoginPage,
        navigationOptions: {
            header: null
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            header: null
        }
    },
    Home: { 
        screen: Home,
        navigationOptions: {
            header: null
        }
    },

},

)



const Container = createAppContainer(Navigator)
