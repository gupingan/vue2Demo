<template>
  <li class="todo-list-item">
    <p class="todo-text" :title="todo.text">{{ todo.text }}</p>
    <button class="remove-btn" @click="onRemoveTodo(todo.id)">
      <svg t="1744541921759" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1653">
        <path d="M911.9 198l-8-8H675.2c-8.7-35.4-29.1-67.4-57.5-90.6C587.8 75.3 550.3 62 512 62s-75.9 13.3-105.7 37.4c-28.5 23.1-48.9 55.2-57.5 90.6h-229l-8 8v64l8 8h263.4c10.6 0 21-3.9 28.6-11.2 7.9-7.6 12.2-17.8 12.2-28.7 0-23.5 9.1-45.6 25.8-62.2 16.6-16.7 38.7-25.8 62.2-25.8s45.6 9.2 62.2 25.8c16.6 16.7 25.8 38.8 25.8 62.2 0 10.9 4.3 21.1 12.2 28.7 7.6 7.4 18 11.2 28.6 11.2h263.1c4.4 0 8-3.6 8-8v-64zM792 370c-4.4 0-8 3.6-8 8v460.5c-0.2 24.1-19.9 43.5-44 43.5H283.9c-24.1 0-43.8-19.4-44-43.6V378c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v459.7c0 69.7 41.5 124.3 94.5 124.3h515.1c53 0 94.5-54.6 94.5-124.3V378c0-4.4-3.6-8-8-8h-64z" p-id="1654"></path><path d="M424 822h-56c-4.4 0-8-3.6-8-8V430c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v384c0 4.4-3.6 8-8 8zM664 822h-56c-4.4 0-8-3.6-8-8V430c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v384c0 4.4-3.6 8-8 8z" p-id="1655"></path>
      </svg>
    </button>
  </li>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TodoListItem extends Vue {
  @Prop() private todo!: {
    id: number;
    text: string;
  };

  @Emit('remove')
  onRemoveTodo (todoId: number) {
    return todoId
  }
}
</script>

<style scoped lang="scss">
.todo-list-item {
  color: #fff;
  background-color:  #313b6d;
  padding: 6px;
  font-size: 28px;
  display: flex;
  justify-content: space-between;
  align-content: stretch;
  border-radius: 4px;
  transition: all 0.3s;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  &:hover {
    background-color: darken($color: #313b6d, $amount: 3%);
  }
}

.todo-text {
  padding: 0;
  margin: 0;
  line-height: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 80%;
}

.remove-btn {
  all: initial;
  background-color: #eee;
  cursor: pointer;
  width: 48px;
  text-align: center;
  border-radius: 4px;
  border: 2px solid #ddd;
  transition: all 0.3s;
  user-select: none;

  & > .icon {
    fill: rgb(217, 13, 13);
    width: 32px;
    height: 32px;
  }

  &:disabled {
    background-color: #e3e5f3;
    border: 2px solid #ddd;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: darken($color: #eee, $amount: 5%);
  }

  &:not(:disabled):active {
    background-color: darken($color: #eee, $amount: 10%);
  }
}
</style>
