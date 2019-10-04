import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Main from './pages/Main';
import AddTask from './pages/AddTask';

const TaskNavigator = createSwitchNavigator({
	Main,
	AddTask
});

const routes = createAppContainer(TaskNavigator);

export default routes;
