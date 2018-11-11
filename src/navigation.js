import React from 'react';
import { StackNavigator, SwitchNavigator } from "react-navigation";
import LoginForm from "./components/loginForm";
import IdeaList from "./components/idealist";
import IdeaPadForm from "./components/ideapadForm";
import AddIdea from "./components/addidea";
import EditIdea from "./components/editidea";
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
        screen: AddIdea,
        navigationOptions: {
            headerTitle: 'Add Idea'
        }
    },
    EditIdeas: {
        screen: EditIdea,
        navigationOptions: {
            headerTitle: 'Edit Idea'
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