let input = prompt('What Would You Like To Do?')
const todos = ['collect chicken eggs', 'clean litter box']
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
    } else if (input === 'new') {
        const newTodo = prompt("What would you like to add");
        todos.push(newTodo);
        console.log(`${newTodo} added to list`);
    } else if (input === 'delete') {
        const index = parseInt(prompt("Enter An Index To Delete"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index');
        }
    }
    input = prompt('What Would You Like To Do?')
}
alert('Goodbye.')