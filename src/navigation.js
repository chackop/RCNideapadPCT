import React from 'react';
import { StackNavigator, SwitchNavigator } from "react-navigation";
import LoginForm from "./components/loginForm";
import IdeaList from "./components/idealist";
import IdeaPadForm from "./components/ideapadForm";
import { Icon } from 'react-native-elements';

const AuthStack = StackNavigator({
    Login: {
        screen: LoginForm,
        navigationOptions: {
            headerTitle: 'Login'
        }
    }
});

const AppStack = StackNavigator({
    Ideas: {
        screen: IdeaList,
        navigationOptions: ({navigation}) => {
            return {
                title: 'Your IdeaPad',
                headerRight: (
                    <Icon 
                        type= 'evilicon'
                        name= 'plus'
                        size= {30}
                        onPress= {() => navigation.navigate('AddIdeas')}
                        iconStyle={{ paddingRight: 10 }}
                    />
                ),
                headerLeft: null
            }
        }
    },
    AddIdeas: {
        screen: IdeaPadForm,
        navigationOptions: {
            headerTitle: 'Idea Pad form'
        }
    }
});

export default SwitchNavigator(
    {
        App: AppStack,
        Auth: AuthStack
    },
    {
        initialRouteName: 'Auth'
    }
);