import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

const Header = props => (
	<View style={styles.header}>
		<View>
			{props.title === 'Adicionar Tarefa' && (
				<TouchableOpacity onPress={() => props.navigate('Main')}>
					<Icon name="arrow-left" size={30} color="#fff" />
				</TouchableOpacity>
			)}
		</View>

		<Text style={styles.title}>{props.title}</Text>

		<View>
			{props.title === 'Minhas Tarefas' && (
				<TouchableOpacity onPress={() => props.navigate('AddTask')}>
					<Icon name="plus" size={30} color="#fff" />
				</TouchableOpacity>
			)}
		</View>
	</View>
);

export default Header;
