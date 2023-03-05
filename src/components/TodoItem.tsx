import {useAppDispatch} from '../hook';
import {toggleStatus, deleteTodo} from '../store/todoSlice';
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
                onChange={() => dispatch(toggleStatus(id))}
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
            <span onClick={() => dispatch(deleteTodo(id))}>&times;</span>
        </li>
    );
};

export default TodoItem;