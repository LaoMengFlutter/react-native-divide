/**
 * Created by 孟庆东 on 2017/8/1.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import Divide from 'react-native-divide'

export default class Demo extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Divide/>
            </View>
        );
    }
}