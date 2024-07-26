// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addTodo, editTodo, deleteTodo } from './Redux/Action';

// const App = () => {
//     const [currentTodo, setCurrentTodo] = useState(null);
//     const todos = useSelector(state => state.todos);
//     const dispatch = useDispatch();

//     const handleEdit = (id) => {
//         const todo = todos.find(todo => todo.id === id);
//         setCurrentTodo(todo);
//     };

//     const handleDelete = (id) => {
//         dispatch(deleteTodo(id));
//     };

//     const handleCancel = () => {
//         setCurrentTodo(null);
//     };

//     const handleSubmit = (todo) => {
//         if (currentTodo) {
//             dispatch(editTodo(currentTodo.id, todo.name));
//         } else {
//             dispatch(addTodo({
//                 id: Date.now(),
//                 name: todo.name
//             }));
//         }
//         setCurrentTodo(null);
//     };

//     const TodoList = ({ todos, onEdit, onDelete }) => (
//         <ul>
//             {todos.map(todo => (
//                 <TodoItem
//                     key={todo.id}
//                     todo={todo}
//                     onEdit={onEdit}
//                     onDelete={onDelete}
//                 />
//             ))}
//         </ul>
//     );

//     const TodoItem = ({ todo, onEdit, onDelete }) => (
//         <li>
//             <span>{todo.name}</span>
//             <button onClick={() => onEdit(todo.id)}>Edit</button>
//             <button onClick={() => onDelete(todo.id)}>Delete</button>
//         </li>
//     );

//     const TodoForm = ({ onSubmit, onCancel, currentTodo }) => {
//         const [name, setName] = useState(currentTodo ? currentTodo.name : '');

//         const handleSubmit = (e) => {
//             e.preventDefault();
//             onSubmit({ name });
//             setName('');
//         };

//         return (
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Save</button>
//                 {currentTodo && <button type="button" onClick={onCancel}>Cancel</button>}
//             </form>
//         );
//     };

//     return (
//         <div>
//             <h1>To-Do List</h1>
//             <TodoList todos={todos} onEdit={handleEdit} onDelete={handleDelete} />
//             <TodoForm onSubmit={handleSubmit} onCancel={handleCancel} currentTodo={currentTodo} />
//         </div>
//     );
// };

// export default App;

// // import React, { useState,useSelector } from 'react';
// // import TodoList from './Todo/Components/TodoList';
// // import TodoForm from './Todo/Components/TodoForm';
// // import { useDispatch } from 'react-redux';
// // import { deleteTodo } from './Todo/Redux/Action';

// // const App = () => {
// //     const [currentTodo, setCurrentTodo] = useState(null);
// //     const [showForm, setShowForm] = useState(false);
// //     const dispatch = useDispatch();

// //     // const handleEdit = (id) => {
// //     //     const todo = useSelector(state => state.todos.find(todo => todo.id === id));
// //     //     setCurrentTodo(todo);
// //     //     setShowForm(true);
// //     // };
// //     const handleEdit=(id)=>{
// //       console.log(id);
// //     }

// //     const handleDelete = (id) => {
// //         dispatch(deleteTodo(id));
// //     };

// //     const handleCancel = () => {
// //         setCurrentTodo(null);
// //         setShowForm(false);
// //     };

// //     return (
// //         <div>
// //             <h1>To-Do List</h1>
// //             <TodoList onEdit={handleEdit} onDelete={handleDelete} />
// //             {showForm && (
// //                 <TodoForm currentTodo={currentTodo} onCancel={handleCancel} />
// //             )}
// //             {!showForm && (
// //                 <button onClick={() => setShowForm(true)}>Add To-Do</button>
// //             )}
// //         </div>
// //     );
// // };

// // export default App;


// // // import './App.css';

// // import Index from "./Todo/Index";

// // function App() {
// //   return (
// //     <>
// //     <Index></Index>
// //     </>
// //   );
// // }

// // export default App;
