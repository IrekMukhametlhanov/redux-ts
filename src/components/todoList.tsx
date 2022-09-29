import { useAppSelector } from '../hooks';
import TodoItem from './todoItem';

const TodoList: React.FC = () => {
    const todos = useAppSelector(state => state.todos.list);



  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;