import React, { useState } from 'react';
import Header from '../../components/Header';
import CardTask from '../../components/CardTask';
import Button from '../../components/Button';
import { Container, Content, ContentCard, Input, ContentInput, Border } from './styles';

const Main = props => {
	const [input, setInput] = useState('');
	const [tasks, setTasks] = useState([]);

	const addTask = () => {
		setTasks([...tasks, input]);
		setInput('');
	};

	const deleteTask = task => {
		const newTasks = tasks.filter(item => item !== task);
		setTasks(newTasks);
	};

	return (
		<Container>
			<Header title="Minhas Tarefas" navigate={props.navigation.navigate} />
			{/* conteudo da pagina */}
			<Content>
				<ContentInput>
					<Input placeholder="Nome da tarefa ..." value={input} onChangeText={input => setInput(input)} />
					<Button title="Adicionar" onPress={addTask} color="#333" />
				</ContentInput>

				<Border />

				{tasks.map(task => (
					<ContentCard>
						<CardTask task={task} />
						<Button title="Remover" color="#f00" onPress={() => deleteTask(task)} />
					</ContentCard>
				))}
			</Content>
		</Container>
	);
};

export default Main;
