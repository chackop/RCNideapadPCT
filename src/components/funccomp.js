import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const FuncComp = (props) => {
    return (
        <Text>
            Hello! {props.something}
        </Text>
    );
}

export default FuncComp;