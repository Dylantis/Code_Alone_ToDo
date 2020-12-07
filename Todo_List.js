const list = [];

const actions = ['new', 'list', 'delete', 'quit']


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
