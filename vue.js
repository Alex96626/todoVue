
Vue.component('add-new-task', {
    
    props: ['value'],

    template: `
    <form class="add-task">
        <label for="task-name"> Название задачи</label>
        <input type="text" name="task-name" 
            v-bind:value = "value"
            v-on:input="$emit('input',$event.target.value)" 
        >
        <button class="task__add" v-on:click.prevent="$emit('addtask')">Добавить задачу</button>  
    </form>
    `,
})

Vue.component ('new-task' , {
    props: ['task', 'closed'],
    template: `
        <div v-bind:class="['task__item', { 'active': task.closed}]">
            <input type = 'checkbox' name = 'task-status'
            v-bind:checked="task.closed"
            v-on:click="$emit('close-task', task)"
            >
            <p class = 'task-name'>{{task.name}}</p>
        </div>
    `,
    
})

const vm = new Vue({
    el: '#todo',
    data: { 
        taskName: '' ,
        taskNameList: [
            {
                name: 11,
                closed:true,
            },
            {
                name:22,
                closed:false,
            }
        ], 

    },

    methods: {
        addNewTask: function () {
            this.taskNameList.push({
                name: this.taskName,
                closed: false
            })
           
        },

        finishTask: function(task) {
           task.closed = !task.closed
        }

    },

})



