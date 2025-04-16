<template>
  <div class="todo-list-container">
    <h1 class="todo-list-title">Todo App</h1>
    <div class="todo-list-main">
      <div class="todo-item-create">
        <BaseInputText v-model="newTodoText" placeholder="Add to do" @keydown.enter="createTodo"/>
        <button @click="createTodo" :disabled="!newTodoText"> + </button>
      </div>
      <ul v-if="todos.length" class="todo-list">
        <TodoListItem
          class="todo-list-item"
          v-for="todo in todos"
          :todo="todo"
          :key="todo.id"
          @remove="removeTodo"
        />
      </ul>
      <p v-else class="todo-list-empty">没有任何待做事务，你可以在顶部输入框中编写后进行添加</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseInputText from './BaseInputText.vue'
import TodoListItem from './TodoListItem.vue'

@Component({
  components: {
    BaseInputText,
    TodoListItem
  }
})
export default class TodoList extends Vue {
  private todos: Array<{
    id: number;
    text: string;
  }> = [{
    id: 1,
    text: 'Learn Vue 3'
  },
  {
    id: 2,
    text: 'Learn Flask'
  },
  {
    id: 3,
    text: 'Learn Docker'
  }];

  private newTodoText = '';
  private nextTodoId () {
    return Math.max(0, ...this.todos.map((t) => t.id)) + 1
  }

  private createTodo () {
    if (this.newTodoText) {
      const newId = this.nextTodoId()
      this.todos.push({
        id: newId,
        text: this.newTodoText
      })
      this.newTodoText = ''
    }
  }

  private removeTodo (todoId: number) {
    this.todos = this.todos.filter((t) => t.id !== todoId)
  }
}
</script>

<style scoped lang="scss">
.todo-list-container {
  display: flex;
  flex-direction: column;
  margin:  0 auto;
  width: 644px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.todo-list-title {
  padding: 72px 0;
  margin: 0;
  line-height: 48px;
  font-size: 48px;
  background-color: #4a3571;
  color: #fff;
  user-select: none;
}

.todo-list-main {
  padding: 20px;
  background-color: #fff;
}

.todo-item-create {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 4px;
}

.todo-item-create button {
  all: initial;
  background-color: #5c6598;
  color: #fff;
  width: 48px;
  text-align: center;
  cursor: pointer;
  font-size: 30px;
  font-weight: 600;
  border: 2px solid #2b61be;
  border-radius: 4px;
  transition: all 0.3s;
  user-select: none;

  &:focus {
    border: 2px solid #2b61be;
  }

  &:disabled {
    background-color: #7a7c8d;
    border: 2px solid #5c80be;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: darken($color: #5c6598, $amount: 5%);
  }

  &:not(:disabled):active {
    background-color: darken($color: #5c6598, $amount: 10%);
  }
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-list-empty {
  font-size: 18px;
  border: 2px solid #ccc;
  padding: 20px 0;
  color: #777;
}
</style>
