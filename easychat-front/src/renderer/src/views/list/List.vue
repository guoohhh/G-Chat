<template>
  <div class="todo-list">
    <div class="drag-panel drag"></div>
    <h1>计划清单</h1>
    <div class="add-task">
      <input v-model="newTask" placeholder="输入新任务" @keyup.enter="addTask" />
      <select v-model="newTaskStatus">
        <option value="todo">待办</option>
        <option value="inProgress">进行中</option>
        <option value="completed">已完成</option>
      </select>
      <button @click="addTask">添加任务</button>
    </div>
    <div class="task-columns">
      <!-- 待办列 -->
      <div 
        class="task-column" 
        :class="{ 'drag-over': dragTarget === 'todo' }"
        @dragover.prevent
        @drop="onDropColumn('todo')"
      >
        <h2>待办</h2>
        <ul class="task-list">
          <li
            v-for="task in getTasksByStatus('todo')"
            :key="task.id" 
            class="task-item"
            draggable="true"
            @dragstart="dragstart($event, task)"
            @dragover.prevent
            @drop="onTaskDrop('todo', task)"
            @dragend="dragend($event)"
            :class="{ 'dragging': currentDragTask === task }"
          >
            <span :class="{ completed: task.completed }" @click="toggleTaskCompletion(task)">
              {{ task.name }}
            </span>
            <button class="delete-btn" @click="deleteTask(task)">删除</button>
          </li>
          <!-- 拖拽到列表末尾的空白区域 -->
          <li 
            class="task-item drop-target" 
            @dragover.prevent 
            @drop="onTaskDrop('todo', null)"
          ></li>
        </ul>
      </div>
      
      <!-- 进行中列 -->
      <div 
        class="task-column" 
        :class="{ 'drag-over': dragTarget === 'inProgress' }"
        @dragover.prevent
        @drop="onDropColumn('inProgress')"
      >
        <h2>进行中</h2>
        <ul class="task-list">
          <li
            v-for="task in getTasksByStatus('inProgress')"
            :key="task.id" 
            class="task-item"
            draggable="true"
            @dragstart="dragstart($event, task)"
            @dragover.prevent
            @drop="onTaskDrop('inProgress', task)"
            @dragend="dragend($event)"
            :class="{ 'dragging': currentDragTask === task }"
          >
            <span :class="{ completed: task.completed }" @click="toggleTaskCompletion(task)">
              {{ task.name }}
            </span>
            <button class="delete-btn" @click="deleteTask(task)">删除</button>
          </li>
          <!-- 拖拽到列表末尾的空白区域 -->
          <li 
            class="task-item drop-target" 
            @dragover.prevent 
            @drop="onTaskDrop('inProgress', null)"
          ></li>
        </ul>
      </div>
      
      <!-- 已完成列 -->
      <div 
        class="task-column" 
        :class="{ 'drag-over': dragTarget === 'completed' }"
        @dragover.prevent
        @drop="onDropColumn('completed')"
      >
        <h2>已完成</h2>
        <ul class="task-list">
          <li
            v-for="task in getTasksByStatus('completed')"
            :key="task.id" 
            class="task-item"
            draggable="true"
            @dragstart="dragstart($event, task)"
            @dragover.prevent
            @drop="onTaskDrop('completed', task)"
            @dragend="dragend($event)"
            :class="{ 'dragging': currentDragTask === task }"
          >
            <span :class="{ completed: task.completed }" @click="toggleTaskCompletion(task)">
              {{ task.name }}
            </span>
            <button class="delete-btn" @click="deleteTask(task)">删除</button>
          </li>
          <!-- 拖拽到列表末尾的空白区域 -->
          <li 
            class="task-item drop-target" 
            @dragover.prevent 
            @drop="onTaskDrop('completed', null)"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserInfoStore } from '@/stores/UserInfoStore'; // 根据实际路径调整
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { v4 as uuidv4 } from 'uuid'; // 确保安装了 uuid 库

export default {
  name: 'List',
  setup() {
    const userInfoStore = useUserInfoStore();
    const { userInfo } = storeToRefs(userInfoStore); // 使用 storeToRefs 保持响应性

    const newTask = ref('');
    const newTaskStatus = ref('todo');
    const tasks = ref([]);
    const currentDragTask = ref(null);  // 当前拖拽的任务对象
    const dragTarget = ref(null);       // 当前拖拽目标的状态，用于视觉反馈


    // 加载任务
    const loadTasksFromLocalStorage = (userId) => {
      const storageKey = `tasks_${userId}`;
      const storedTasks = localStorage.getItem(storageKey);
      if (storedTasks) {
        try {
          tasks.value = JSON.parse(storedTasks);
          console.log(`Loaded tasks for userId ${userId}:`, tasks.value); // 调试信息
        } catch (error) {
          console.error('Failed to parse tasks from localStorage:', error);
          tasks.value = [];
        }
      } else {
        // 如果没有存储过任务，初始化默认任务
        tasks.value = [
          { id: uuidv4(), name: '添加你的任务吧！', completed: false, status: 'todo' },
          { id: uuidv4(), name: '我在东北大学很想你', completed: false, status: 'todo' }
        ];
        saveTasksToLocalStorage(userId);  // 保存初始化的任务
        console.log('Initialized default tasks:', tasks.value); // 调试信息
      }
    };

    


    // 保存任务
    const saveTasksToLocalStorage = (userId) => {
      const storageKey = `tasks_${userId}`;
      try {
        localStorage.setItem(storageKey, JSON.stringify(tasks.value));
        console.log(`Saved tasks for userId ${userId}:`, tasks.value); // 调试信息
      } catch (error) {
        console.error('Failed to save tasks to localStorage:', error);
      }
    };
    
    // 监视 userInfo 的变化
    watch(userInfo, (newUser) => {
      console.log('User Info Changed:', newUser); // 调试信息
      if (newUser && newUser.userId) { // 确保 `userId` 存在
        loadTasksFromLocalStorage(newUser.userId);
      } else {
        tasks.value = [];  // 用户未登录，清空任务列表
      }
    }, { immediate: true });

    // 添加任务
    const addTask = () => {
      if (newTask.value.trim()) {
        const newTaskObj = {
          id: uuidv4(), // 生成唯一ID
          name: newTask.value.trim(),
          completed: false,
          status: newTaskStatus.value,
        };
        tasks.value.push(newTaskObj);
        newTask.value = '';
        saveTasksToLocalStorage(userInfo.value.userId);
      }
    };

    // 切换任务完成状态
    const toggleTaskCompletion = (task) => {
      task.completed = !task.completed;
      saveTasksToLocalStorage(userInfo.value.userId);
    };

    // 删除任务
    const deleteTask = (task) => {
      const index = tasks.value.findIndex(t => t.id === task.id);
      if (index !== -1) {
        tasks.value.splice(index, 1);
        saveTasksToLocalStorage(userInfo.value.userId);
      }
    };

    // 根据状态获取任务列表
    const getTasksByStatus = (status) => {
      return tasks.value.filter(task => task.status === status);
    };

    // 拖拽开始
    const dragstart = (event, task) => {
      currentDragTask.value = task;
      event.dataTransfer.effectAllowed = 'move';
      // 设置拖拽时的透明度
      event.target.classList.add('dragging');
    };

    // 拖拽放下到列
    const onDropColumn = (status) => {
      if (currentDragTask.value) {
        const draggedTask = currentDragTask.value;
        if (draggedTask.status !== status) {
          draggedTask.status = status;
          saveTasksToLocalStorage(userInfo.value.userId);
        }
        currentDragTask.value = null;
      }
      dragTarget.value = null;
    };

    // 拖拽放下到任务项
    const onTaskDrop = (status, targetTask) => {
      if (currentDragTask.value) {
        const draggedTask = currentDragTask.value;
        const draggedStatus = draggedTask.status;

        if (draggedStatus === status) {
          // 同一列内的拖拽，重新排序
          const tasksInStatus = tasks.value
            .filter(task => task.status === status)
            .map(task => task.id);

          const draggedTaskIndex = tasksInStatus.indexOf(draggedTask.id);
          const targetTaskIndex = targetTask ? tasksInStatus.indexOf(targetTask.id) : tasksInStatus.length;

          if (draggedTaskIndex === -1 || targetTaskIndex === -1) return;

          // 计算在主任务数组中的实际索引
          const originalIndex = tasks.value.findIndex(task => task.id === draggedTask.id);
          const targetIndexInMain = targetTask ? tasks.value.findIndex(task => task.id === targetTask.id) : tasks.value.length;

          if (originalIndex === -1) return;

          // 移除拖拽的任务
          tasks.value.splice(originalIndex, 1);

          // 插入拖拽的任务到新的位置
          tasks.value.splice(targetIndexInMain, 0, draggedTask);

          saveTasksToLocalStorage(userInfo.value.userId);
        } else {
          // 跨列拖拽，更新状态
          draggedTask.status = status;
          saveTasksToLocalStorage(userInfo.value.userId);
        }

        currentDragTask.value = null;
      }
    };

    // 拖拽结束
    const dragend = (event) => {
      // 清理拖拽状态
      currentDragTask.value = null;
      dragTarget.value = null;
      // 移除拖拽样式
      event.target.classList.remove('dragging');
    };

    return {
      newTask,
      newTaskStatus,
      tasks,
      currentDragTask,
      dragTarget,
      addTask,
      toggleTaskCompletion,
      deleteTask,
      getTasksByStatus,
      dragstart,
      onDropColumn,
      onTaskDrop,
      dragend,
      userInfo, // 获取用户信息
    };
  }
};
</script>

<style scoped>
/* 容器：任务列表 */
.todo-list {
  width: 94vw;
  height: 90vh;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

/* 添加任务输入框区域 */
.add-task {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
}

/* 拖拽区域 */
.drag-panel {
  height: 60px;
  background: #f7f7f7;
}

/* 新任务输入框样式 */
.add-task input {
  flex: 1;
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* 新任务下拉选择框样式 */
.add-task select {
  margin-right: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* 新任务按钮样式 */
.add-task button {
  padding: 8px 16px;
  background-color: #07c160;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* 新任务按钮悬停样式 */
.add-task button:hover {
  background-color: #06a34f;
}

/* 任务列容器样式 */
.task-columns {
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  max-height: 90vh;
}

/* 单一任务列样式 */
.task-column {
  flex: 1;
  margin-right: 20px;
  background: #f1f1f1;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: hidden;
  overflow-x: auto;
  height: 100%;
  transition: background-color 0.3s;
}

/* 拖拽目标高亮样式 */
.task-column.drag-over {
  background-color: #e0f7fa;
}

/* 任务列表样式 */
.task-list {
  list-style-type: none;
  padding: 0;
  overflow-y: auto;
  max-height: calc(100% - 40px);
}

/* 单一任务项的样式 */
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  cursor: grab;
  transition: background-color 0.3s, opacity 0.3s;
}

.task-item.dragging {
  opacity: 0.5;
}

.task-item.drop-target {
  border: 2px dashed #ccc;
  background-color: #fafafa;
}

.task-item:hover {
  background-color: #f0f0f0;
}

/* 任务内容的样式 */
.task-item span {
  flex: 1;
  word-wrap: break-word;
  white-space: nowrap;
  overflow-x: auto;
}

/* 删除按钮样式 */
.task-item button {
  background: transparent;
  border: none;
  color: #ff4d4d;
  cursor: pointer;
}

/* 删除按钮悬停样式 */
.task-item button:hover {
  color: #ff0000;
}

/* 已完成任务的样式 */
.task-item .completed {
  text-decoration: line-through;
}

/* 删除按钮单独的样式 */
.delete-btn {
  padding: 5px 10px;
  background: transparent;
  border: none;
  color: #f44336;
  cursor: pointer;
}

/* 删除按钮悬停样式 */
.delete-btn:hover {
  color: #e53935;
}

/* 登录提示样式 */
.login-prompt {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 20px;
  color: #555;
}
</style>
