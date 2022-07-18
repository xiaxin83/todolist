<template>
   <div class="todoContent">
        <div class="todoHeader">
            <span>~ To Do list ~</span>
        </div>
        <el-form :rules="todoRules"  ref="ruleTodo" label-width="100px" class="demo-ruleForm">
            <el-form-item  prop="todoInput">
                <el-input v-model="todoItem" placeholder="Add To do"></el-input>
            </el-form-item>
            <el-button size="mini"  @click="addItem">添加Todo</el-button>
        </el-form>
        <ul v-if="displayList" class="itemList">
        <li class="item" v-for="(item,index) in allTodoItem">
            <div class="listLeft">
                <button class="checkbox-btn" @click="doneItem(index)">
                     <div class="checkbox"></div>
                </button>
                <p>{{item.value}} ----{{allTodoItem[index].done ? "完成" : "未完成" }}</p>
            </div>
            <button class="close-btn" @click="delItem(index)">
                <img src="@/assets/close.png" alt="" />
            </button>
        </li>
    </ul>
    <p>总数：{{ allTodoItem.length }}</p>
    <p>未完成: {{ getCount(false) }}</p>
    <p>完成: {{ getCount(true) }}</p>
   </div>
</template>
<script>
export default {
   name: '',
   components: {
     
   },
   data() {
     return {
       displayList: true,
       todoItem: '',
       allTodoItem: [],
       todoRules: {
        todoInput: [
            { required: true, message: '请输入todo', trigger: 'blur' } 
        ]
       }
     }
   },
   computed: {
     doneFalse() {
      return this.allTodoItem.filter((e) => !e.done).length;
    },
   },
   watch: {
    allTodoItem: {
      handler(value) {
        localStorage.setItem("todokey", JSON.stringify(value));
      },
      deep: true,
    },
   },
   mounted() {
     
   },
   methods: {
     getCount(done) {
      return this.allTodoItem.filter((e) => e.done == done).length;
    },
    addItem() {
      let todo = this.todoItem;
      if (todo) this.saveData({ value: todo, done: false });
        this.$refs.ruleTodo.resetFields();
    },
    delItem(index) {
      this.allTodoItem.splice(index, 1);
    },
    saveData(value) {
      this.allTodoItem.unshift(value);
    },
    doneItem(index) {
      this.allTodoItem[index].done = true;
    },
   },
   created() {
    const data = localStorage.getItem("todokey");
    if (data) this.allTodoItem = JSON.parse(data);
   },
};
</script>
<style lang='less' scoped>
.todoContent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 400px;
    height: 300px;
    border-radius: 15px;
    background: rgba(18, 37, 18, .5);
    overflow: auto;
        .todoHeader {
            text-align: center;
            padding: 10px;
            color: #ccc;
        }
        .el-form {
            display: flex;
            justify-content: center;
            margin-right: 100px;
            margin-top: 50px;
                .el-button {
                    height: 40px;
                }
            .el-form-item {
               /deep/ .el-input__inner {
                width: 200px;
                outline: none;
                border-style: none;
                background-color: transparent;
                border-bottom: 3px dashed #fe7345;
             
               }
            }
        }
        .itemList {
            text-align: center;
            list-style: none;
            .item {
                display: flex;
                justify-content: space-between;
                .listLeft {
                    display: flex;
                 .checkbox-btn {
                    width: 14px;
                    height: 14px;
                    padding: 5px;
                    border-radius: 2px;
                    border: 2px solid #494a4b;
 
      }
            }
            p {
              font-size: 14px;
        margin-top: 0px;
            }
        }
        .close-btn {
             width: 14px;
             height: 14px;
             outline: none;
             border: none;
             margin-right: 30px;
        }
            }
            
}
</style>