import './index.css'
import Vue from 'vue'
import { MyComponent } from './MyComponent'
const vm = new Vue({
  el: '#app',

  render() {
    return <MyComponent text="hello world" />
  },
})
console.log(vm)
