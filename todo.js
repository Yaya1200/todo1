var todo = [];
function todo1() {
    var inputelement = document.querySelector('#input1');
    var dateinput = document.querySelector('#input2');
    var duedate = dateinput.value;
    var name = inputelement.value;
    todo.push({ name: name, duedate: duedate });
    inputelement.value = '';
    print();
}
function print() {
    var todohtml = '';
    for (var i = 0; i < todo.length; i++) {
        var todo2 = todo[i];
        var name_1 = todo2.name;
        var duedate = todo2.duedate;
        var html = "\n    <div class=\"second\">\n   <div>".concat(name_1, "</div>\n   <div>").concat(duedate, "</div>\n   <button onclick=\"todo.splice(").concat(i, ", 1); print();\"  >Delete</button>\n   </div>");
        todohtml += html;
    }
    document.querySelector('.print').innerHTML = todohtml;
}
