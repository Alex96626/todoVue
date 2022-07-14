
<template>
    <div class = 'task__item' v-for="task in taskNameList">
        <input type ='checkbox' name ='task-status'>
        <p class ='task-name' > {{task}} </p>
    </div>
</template>