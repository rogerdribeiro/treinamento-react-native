import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import Button from '../Button';
import styles from './styles';

const Task = props => (
	<View style={styles.card}>
		<Text style={styles.textTask}>{props.task}</Text>
	</View>
);

export default Task;
