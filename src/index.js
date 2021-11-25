import '../src/styles.css'; 
import {Todo, TodoList} from './classes'
import {crearTodoHtml} from './js/componentes';


export const todoList = new TodoList ();


todoList.todos.forEach(todo  => crearTodoHtml (todo) ) ;

//const newTodo = new Todo('Aprender Js');
// todoList.nuevoTodo (newTodo);

// todoList.todos [0].imprimirClase;

console.log ('todos', todoList.todos);





//todoList.nuevoTodo(tarea);
//console.log(todoList);

//crearTodoHtml (tarea);   



//localStorage.setItem('mi-key', 'ABC123')
//sessionStorage.setItem('mi-key', 'ABC123');



//setTimeout( () => {
//    
//    localStorage.removeItem('mi-key');//
//
//}, 1500);
