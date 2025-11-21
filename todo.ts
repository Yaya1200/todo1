interface TodoItem{
  name: string;
  duedate:string;
}
const todo: TodoItem[] = []
function todo1(){
 const inputelement = document.querySelector('#input1') as HTMLInputElement;
 const dateinput = document.querySelector('#input2') as HTMLInputElement;
 const duedate:string = dateinput.value;
 const name:string = inputelement.value;
 todo.push({name, duedate});
 inputelement.value = '';
 print();

}
function print(){
  let todohtml:string = '';
  for(let i = 0; i < todo.length; i++){
    const todo2:TodoItem = todo[i];
    const name:string = todo2.name;
    const duedate:string = todo2.duedate;
    let html:string = `
    <div class="second">
   <div>${name}</div>
   <div>${duedate}</div>
   <button onclick="todo.splice(${i}, 1); print();"  >Delete</button>
   </div>`
    todohtml += html;
   

  }
  (document.querySelector('.print')as HTMLElement).innerHTML  = todohtml;
}

