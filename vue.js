
Vue.component ('new-task' , {
    props: ['task'],
    template: `
        <div class = 'task__item'>
            <input type = 'checkbox' name = 'task-status'>
            <p class = 'task-name'>{{task}}</p>
        </div>
    `,
    
})

const vm = new Vue({
    el: '#todo',
    data: { 
        taskName: '',
        taskNameList: [],   
    },

    
    methods: {
        addNewTask: function () {
            this.taskNameList.push({name: this.taskName})
            return this.taskNameList
       } 
    }
    
})



