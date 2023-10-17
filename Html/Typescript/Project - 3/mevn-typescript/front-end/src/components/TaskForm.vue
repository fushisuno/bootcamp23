<template>
  <form @submit.prevent="saveTask()">
    <input type="text" name="inTitle" placeholder="Write a title" v-model="task.title">

    <textarea name="inDescricao" rows="3" placeholder="Write a description" v-model="task.descricao"></textarea>

    <button>Save</button>    

  </form>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Task } from '../interfaces/Task';
  import { createTask } from '../services/TaskService';

  export default defineComponent({
    data(){
      return {
        task: {} as Task
      };
    },
    methods: {
      async saveTask(){
        console.log(this.task)
        const res = await createTask(this.task)
        console.log(res)
      }
    }
  })
</script>

<style>
</style>