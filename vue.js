
Vue.component('add-new-task', {
    
    // props: ['value', 'notes'],
    data: function () {
        return {
            taskName : '',
            notes: '', 
        }
    },

    methods: {
        
    },

    template: `
    <form class="add-task">
        <label for="task-name"> Название задачи</label>
        <input type="text" name="task-name" 
            v-model="taskName"
           
        >
        <textarea  
            v-model="notes"
        ></textarea>
        <button class="task__add" 
            v-on:click.prevent="$emit('addtask')"
        >Добавить задачу</button>  
    </form>
    `,

    
})

Vue.component ('new-task' , {
    props: ['task'],
    
    template: `
        <div v-bind:class="['task__item', { 'active': task.closed}]">
            <input type = 'checkbox' name = 'task-status'
                v-bind:checked="task.closed"
                v-on:click="$emit('close-task', task)"
            >
            <p class = 'task-name'>{{task.name}}</p>
            <p class = 'task-create-date'>{{task.createDate}} </p>
            <p class = "task-notes">{{task.notes}} </p>
        </div>
    `,
    
})

const vm = new Vue({
    el: '#todo',
    data: { 
        // taskName: '' ,
        taskNameList: JSON.parse(localStorage.getItem('task')) ?? [],
        // notes: 'qq', 
       
        getDate : function() {
            const date = new Date()
            const nowDate = {}
            nowDate.fullDate  = () =>  date.toLocaleDateString().split('.').join(':')
            nowDate.hours = () => date.getHours()
            nowDate.minutes = () => date.getMinutes()
            return nowDate
        }
 
    },

    methods: {
        
        addNewTask: function () {
            const {fullDate, hours, minutes } = this.getDate()   
            this.taskNameList.push({
                name: this.taskName,
                closed: false,
                // createDate : `${hours()}:${minutes()}:${fullDate()}`,
                notes: this.notes
            })
           
        },

        finishTask: function(task) {
           task.closed = !task.closed
        },

        saveToLocal: function() {
            localStorage.setItem('task', JSON.stringify(this.taskNameList))
        }

    },

    watch: {
        taskNameList : {
            deep: true,
            handler: 'saveToLocal'
        },
    }

})



