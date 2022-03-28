
const todos = [
    {
        text: 'buy coffee',
        done: true
    },
    {
        text: 'walk the dog',
        done: false
    },
    {
        text: 'go to gym',
        done: true
    },
    {
        text: 'study and code',
        done: false
    }
]



const app = new Vue({
    el: '#todo',
    data: {
        todos,
        doneToDos: [],
        newToDo: ''
    },
    methods: {
        taskDone(toDoIndex) {
            if (this.todos[toDoIndex].done === true) {
                return 'task-done';
            }
        }
    }




});
