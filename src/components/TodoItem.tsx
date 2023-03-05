import {useAppDispatch} from '../hook';
import {toggleComplete, removeTodo} from '../store/todoSlice';
import React from "react";

interface TodoItemProps {
    id: string,
    title: string,
    completed: boolean,
}

const TodoItem: React.FC<TodoItemProps> = ({id, title, completed}) => {
    const dispatch = useAppDispatch();

    return (
        <li>
            <input
                type='checkbox'
                checked={completed}
                onChange={() => dispatch(toggleComplete(id))}
            />
            <span
                style={{
                    marginLeft: '10px',
                    textDecoration: completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                    color: completed ? 'green' : 'black',
                    fontWeight: completed ? 'bold' : 'normal',
                    display: 'inline-block',
                    margin: '0 10px'
                }}
            >
                {title}
            </span>
            <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
        </li>
    );
};

export default TodoItem;