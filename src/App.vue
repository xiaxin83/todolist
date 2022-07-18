<template>
  <div id="app">
    <Home></Home>
    <!-- <input type="text" v-model="todoItem" ref="itemReset" />
    <button @click="addItem">添加</button>
    <ul>
      <li v-for="(item, index) in allTodoItem">
        {{ item.value }}-------{{ allTodoItem[index].done ? "完成" : "未完成" }}
        <button @click="delItem(index)">删除</button>
        <button @click="doneItem(index)">点击完成</button>
      </li>
    </ul>
    <p>总数：{{ allTodoItem.length }}</p>
    <p>未完成: {{ getCount(false) }}</p>
    <p>完成: {{ getCount(true) }}</p> -->
  </div>
</template>
<script>
import Home from './views/home'
export default {
  name: "",
  components: {
    Home
  },
  data() {
    return {
      // todoItem: "",
      // allTodoItem: [],
    };
  },
  watch: {
    // allTodoItem: {
    //   handler(value) {
    //     localStorage.setItem("todokey", JSON.stringify(value));
    //   },
    //   deep: true,
    // },
  },
  // computed: {
  //   doneFalse() {
  //     return this.allTodoItem.filter((e) => !e.done).length;
  //   },
  // },
  // created() {
  //   const data = localStorage.getItem("todokey");
  //   if (data) this.allTodoItem = JSON.parse(data);
  // },
  // methods: {
  //   getCount(done) {
  //     return this.allTodoItem.filter((e) => e.done == done).length;
  //   },
  //   addItem() {
  //     let todo = this.todoItem;
  //     if (todo) this.saveData({ value: todo, done: false });
  //   },
  //   delItem(index) {
  //     this.allTodoItem.splice(index, 1);
  //   },
  //   saveData(value) {
  //     this.allTodoItem.unshift(value);
  //   },
  //   doneItem(index) {
  //     this.allTodoItem[index].done = true;
  //   },
  // },
};
</script>
<style lang="" scoped></style>
