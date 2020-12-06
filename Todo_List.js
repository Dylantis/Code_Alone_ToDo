const list = [];


// let action = prompt("What would you like to do?");
// if (action === 'add') {
//     let add = list.push(prompt("What would you like to add?"))
//     console.log(list);
//     let action = prompt("What would you like to do?");
// } else if (action === 'list') {
//     for (let i = 0; i < list.length; i++) {
//         console.log(list);
//         let action = prompt("What would you like to do?");
//     }

// } else if (action === 'delete') {

//     for (let i = 0; i < list.length; i++) {
//         console.log(list);
//         let remove = list.pop();
//     }

// } else if (action === 'quit') {
//     alert("Goodbye.")

// } else {
//     prompt("That Action Is Not Recognized")
// }
const actions = ['new', 'list', 'delete', 'quit']
// console.log(actions[0]);
// let option = prompt("What Would You Like To Do");

let option = prompt("What would you like to do?");

console.log(1)
while (option !== (actions[3])) {

    if (option === (actions[3])) break;
    while (option !== (actions[3])) {

        if (option === (actions[0])) {
            list.push(prompt("What would you like to add?"))
            console.log("new")
            for (let i = 0; i < list.length; i++) {
                console.log(`${list[i]} was added to the list`)
            }
        } option = prompt("What would you like to do?")

        console.log(2)
        if (option === (actions[1])) {
            for (let i = 0; i < list.length; i++) {
                console.log(list.indexOf(list[i]), list[i])
            }
        }
        if (option === (actions[2])) {
            option = list.splice(prompt("What Would You Like To Delete?"), 1)

        }

    }
}
if (option === (actions[3])) {
    alert("Goodbye.");
} 
