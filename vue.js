
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
    props: ['task'],
    template: `
        <div class = 'task__item'>
            <input type = 'checkbox' name = 'task-status' v-on:click="$emit('closetask', $event)">
            <p class = 'task-name'>{{task.name}}</p>
        </div>
    `,
    
})

const vm = new Vue({
    el: '#todo',
    data: { 
        taskName: '' ,
        taskNameList: [], 
        isActive: false,
    },

    methods: {
        addNewTask: function () {
            this.taskNameList.push({name: this.taskName})
        },

        finishTask: function(event) {
            console.log(event)
            event.target.checked ? this.isActive = true : this.isActive = false

        }

        
    },

})



