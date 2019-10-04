import React from 'react';

import { Text, View } from 'react-native';
import Header from '../../components/Header';

import { Container, Content, Input } from './styles';

const AddTask = props => (
	<Container>
		<Header title="Adicionar Tarefa" navigate={props.navigation.navigate} />
		<Content>
			<Input placeholder="Nome" />
			<Input placeholder="Descrição" />
			<Input placeholder="Rótulo" />
			<Input placeholder="Data" />
		</Content>
	</Container>
);

export default AddTask;
