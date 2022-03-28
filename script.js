
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
        newToDo: {
            text: '',
            done: false
        }
    },
    methods: {
        taskDone(toDoIndex) {
            if (this.todos[toDoIndex].done === true) {
                return 'task-done';
            }
        },

        taskRemove(toDoIndex) {
            this.todos.splice(toDoIndex, 1);
        },
        
        taskAdd() {

            const newToDo = this.newToDo.text.trim();

            if (newToDo.length > 0) {
                this.todos.unshift(this.newToDo);
            }

            // this.newToDo = '';

            
        },

        taskToggle(item) {
            if (item.done === true) {
                item.done = false;
            } else {
                item.done = true;
            }
        }
        
        
    }




});
