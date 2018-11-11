import React from 'react';
import { StackNavigator, SwitchNavigator } from "react-navigation";
import LoginForm from "./components/loginForm";
import IdeaList from "./components/idealist";
import IdeaPadForm from "./components/ideapadForm";

const AuthStack = StackNavigator({
    Login: {
        screen: LoginForm,
        navigationOptions: {
            headerTitle: 'Login'
        }
    }
});

const AppStack = StackNavigator({
    AddIdeas: {
        screen: IdeaPadForm,
        navigationOptions: {
            headerTitle: 'Idea Pad form'
        }
    },
    Ideas: {
        screen: IdeaList,
        navigationOptions: {
            headerTitle: 'Idea List'
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