
Vue.component('add-new-task', {
    
    props: ['value'],
    
    data: function() {
        return {
            taskName: '',
            taskNameList: [], 
        }
    },
    methods: {
        addNewTask: function () {
            console.log(vm.taskName)
            vm.taskNameList.push({name: vm.taskName})
        },

        
    },

    template: `
    <form class="add-task">
        <label for="task-name"> Название задачи</label>
        <input type="text" name="task-name" 
            v-bind:value = "value"
            v-on:input="$emit('input',$event.target.value)"
            
        >
        <button class="task__add" v-on:click.prevent='addNewTask'>Добавить задачу</button>  
    </form>
    `,
})

Vue.component ('new-task' , {
    props: ['task', 'checked'],
    template: `
        <div class = 'task__item' v-bind:class="{active:isActive}">
            <input type = 'checkbox' name = 'task-status' v-on:click='finishTask'>
            <p class = 'task-name'>{{task.name}}</p>
        </div>
    `,

    data: function() {
        return {
            isActive: false,
        }
    },
    
    methods: {
        finishTask: function(event) {
            event.target.checked ? this.isActive = true: this.isActive = false

        }
    }
    
})

const vm = new Vue({
    el: '#todo',
    data: { 
        taskName: '' ,
        taskNameList: [], 
        isActive: false,
    },

})



