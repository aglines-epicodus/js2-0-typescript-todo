// I.
// function Task(description, priority) {
//   this.description = description;
//   this.priority = priority;
// }
// The above is Oldthink Javascript
// The below is for universally-supported ES5


//II.
// class Task {
//   done: boolean;
//   description: string;
//   priority: string;
//
//   constructor(descriptionParameter: string, priorityParameter: string){
//     this.done = false;
//     this.description = descriptionParameter;
//     this.priority = priorityParameter;
//   }
// }
//

//III. Public constructor shortcut
// class Task{
//   done: boolean;
//   description: string;
//   priority: string;
//
//   constructor(public description: string, public priority: string){
//     this.done = false;
//   }
// }

//IV. Finally:
class Task{
  done: boolean = false;

  constructor(public description: string, public priority: string){}
}

var tasks: Task[] = [];
tasks.push(new Task('Dishes', 'Medium'));
console.log(tasks);

//
