import React from 'react';

import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Button = props => (
	<TouchableOpacity style={{ ...styles.button, backgroundColor: props.color }} onPress={props.onPress}>
		<Text style={styles.textButton}>{props.title}</Text>
	</TouchableOpacity>
);

export default Button;
