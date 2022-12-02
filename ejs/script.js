/**
 * render function let you render HTML
 * Tags <%= let us to print the value of a variable in the HTML page
**/

const people = ['Danang', 'Nanda', 'Toha'],
peopleContent = ejs.render('<%= people.map(name => name + " Ganteng").join(", "); %>');
document.getElementById('people').innerHTML = peopleContent;



































/**
 * Tags <% let us to write a JavaScript code in the HTML page without it showing in the HTML page
 * It also can store a value in a variable
 */
//const todos = [
//  { task: 'Mandi', isComplete: true, name: 'Danang' },
//  { task: 'Makan', isComplete: false, name: 'Nanda' },
//  { task: 'Kerja', isComplete: false, name: 'Indra' },
//  { task: 'Olahraga', isComplete: false, name: 'Toha' }
//]
//const todoContent = ejs.render(`
//  <ul>
//    <%
//      todos.forEach((todo) => { 
//      const taskLabel = todo.task + ' (' + todo.name + ')'
//    %>
//      <li>
//        <% if (todo.isComplete) { %> <strike> <% } %>
//        <%= taskLabel %>
//        <% if (todo.isComplete) { %> </strike> <% } %>
//      </li>
//    <% }); %>
//  </ul>
//`);
//document.getElementById('todos').innerHTML = todoContent;