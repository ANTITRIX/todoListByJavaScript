const fs=require("fs")
const action=process.argv[2]
switch (action){
    case "add":
        const todo=process.argv.slice(3);
        const stringTodo=todo.join(' ');
        fs.writeFileSync("todo list.txt",stringTodo);
        break;
    case "edit":
        const id=process.argv[4];
        

}