import React, { useState } from 'react';

const Todos = () => {
  const [todosItems, setTodosItems] = useState([
    'Learn React',
    'Learn Redux',
    'Learn GraphQL',
    'Learn Next.js',
    'Learn Node.js',
  ]);
  const [todoInput, setTodoInput] = useState('');
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setTodosItems([...todosItems, todoInput]);
      setTodoInput('');
    }
  };

  const handleToggleComplete = (index) => {
    setCompletedTodos((prevCompleted) => {
      const updatedCompleted = [...prevCompleted];
      updatedCompleted[index] = !updatedCompleted[index];
      return updatedCompleted;
    });
  };

  const handleRemoveTodo = (index) => {
    setTodosItems((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.splice(index, 1);
      return updatedTodos;
    });
  };

  return (
    <div className="todos">
      <div className="todos-head">
        <h1 className="header">Todos</h1>
      </div>
      <div className="input">
        <input
          type="text"
          name="todoInput"
          id="todoInput"
          value={todoInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <ul>
        {todosItems.map((e, index) => (
          <div
            className={`listItems ${completedTodos[index] ? 'done' : ''}`}
            key={e}
          >
            <input
              type="checkbox"
              className="checkbox"
              id={`${e}Checkbox`}
              onChange={() => handleToggleComplete(index)}
            />
            <li>{e}</li>
            <p
              className="close"
              id="done"
              onClick={() => handleRemoveTodo(index)}
            >
              X
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
