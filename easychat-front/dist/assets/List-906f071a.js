import { _ as _export_sfc, d as useUserInfoStore, bN as storeToRefs, r as ref, A as watch, h as openBlock, i as createElementBlock, j as createBaseVNode, G as withDirectives, bA as vModelText, q as withKeys, bz as vModelSelect, D as normalizeClass, l as withModifiers, F as Fragment, n as renderList, t as toDisplayString, v as pushScopeId, x as popScopeId } from "./index-d3de2193.js";
const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    if (typeof crypto === "undefined" || !crypto.getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    getRandomValues = crypto.getRandomValues.bind(crypto);
  }
  return getRandomValues(rnds8);
}
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const native = { randomUUID };
function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
const List_vue_vue_type_style_index_0_scoped_bafb0346_lang = "";
const _sfc_main = {
  name: "List",
  setup() {
    const userInfoStore = useUserInfoStore();
    const { userInfo } = storeToRefs(userInfoStore);
    const newTask = ref("");
    const newTaskStatus = ref("todo");
    const tasks = ref([]);
    const currentDragTask = ref(null);
    const dragTarget = ref(null);
    const loadTasksFromLocalStorage = (userId) => {
      const storageKey = `tasks_${userId}`;
      const storedTasks = localStorage.getItem(storageKey);
      if (storedTasks) {
        try {
          tasks.value = JSON.parse(storedTasks);
          console.log(`Loaded tasks for userId ${userId}:`, tasks.value);
        } catch (error) {
          console.error("Failed to parse tasks from localStorage:", error);
          tasks.value = [];
        }
      } else {
        tasks.value = [
          { id: v4(), name: "添加你的任务吧！", completed: false, status: "todo" },
          { id: v4(), name: "我在东北大学很想你", completed: false, status: "todo" }
        ];
        saveTasksToLocalStorage(userId);
        console.log("Initialized default tasks:", tasks.value);
      }
    };
    const saveTasksToLocalStorage = (userId) => {
      const storageKey = `tasks_${userId}`;
      try {
        localStorage.setItem(storageKey, JSON.stringify(tasks.value));
        console.log(`Saved tasks for userId ${userId}:`, tasks.value);
      } catch (error) {
        console.error("Failed to save tasks to localStorage:", error);
      }
    };
    watch(userInfo, (newUser) => {
      console.log("User Info Changed:", newUser);
      if (newUser && newUser.userId) {
        loadTasksFromLocalStorage(newUser.userId);
      } else {
        tasks.value = [];
      }
    }, { immediate: true });
    const addTask = () => {
      if (newTask.value.trim()) {
        const newTaskObj = {
          id: v4(),
          // 生成唯一ID
          name: newTask.value.trim(),
          completed: false,
          status: newTaskStatus.value
        };
        tasks.value.push(newTaskObj);
        newTask.value = "";
        saveTasksToLocalStorage(userInfo.value.userId);
      }
    };
    const toggleTaskCompletion = (task) => {
      task.completed = !task.completed;
      saveTasksToLocalStorage(userInfo.value.userId);
    };
    const deleteTask = (task) => {
      const index = tasks.value.findIndex((t) => t.id === task.id);
      if (index !== -1) {
        tasks.value.splice(index, 1);
        saveTasksToLocalStorage(userInfo.value.userId);
      }
    };
    const getTasksByStatus = (status) => {
      return tasks.value.filter((task) => task.status === status);
    };
    const dragstart = (event, task) => {
      currentDragTask.value = task;
      event.dataTransfer.effectAllowed = "move";
      event.target.classList.add("dragging");
    };
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
    const onTaskDrop = (status, targetTask) => {
      if (currentDragTask.value) {
        const draggedTask = currentDragTask.value;
        const draggedStatus = draggedTask.status;
        if (draggedStatus === status) {
          const tasksInStatus = tasks.value.filter((task) => task.status === status).map((task) => task.id);
          const draggedTaskIndex = tasksInStatus.indexOf(draggedTask.id);
          const targetTaskIndex = targetTask ? tasksInStatus.indexOf(targetTask.id) : tasksInStatus.length;
          if (draggedTaskIndex === -1 || targetTaskIndex === -1)
            return;
          const originalIndex = tasks.value.findIndex((task) => task.id === draggedTask.id);
          const targetIndexInMain = targetTask ? tasks.value.findIndex((task) => task.id === targetTask.id) : tasks.value.length;
          if (originalIndex === -1)
            return;
          tasks.value.splice(originalIndex, 1);
          tasks.value.splice(targetIndexInMain, 0, draggedTask);
          saveTasksToLocalStorage(userInfo.value.userId);
        } else {
          draggedTask.status = status;
          saveTasksToLocalStorage(userInfo.value.userId);
        }
        currentDragTask.value = null;
      }
    };
    const dragend = (event) => {
      currentDragTask.value = null;
      dragTarget.value = null;
      event.target.classList.remove("dragging");
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
      userInfo
      // 获取用户信息
    };
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-bafb0346"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "todo-list" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "drag-panel drag" }, null, -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "计划清单", -1));
const _hoisted_4 = { class: "add-task" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "todo" }, "待办", -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "inProgress" }, "进行中", -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "completed" }, "已完成", -1));
const _hoisted_8 = [
  _hoisted_5,
  _hoisted_6,
  _hoisted_7
];
const _hoisted_9 = { class: "task-columns" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", null, "待办", -1));
const _hoisted_11 = { class: "task-list" };
const _hoisted_12 = ["onDragstart", "onDrop"];
const _hoisted_13 = ["onClick"];
const _hoisted_14 = ["onClick"];
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", null, "进行中", -1));
const _hoisted_16 = { class: "task-list" };
const _hoisted_17 = ["onDragstart", "onDrop"];
const _hoisted_18 = ["onClick"];
const _hoisted_19 = ["onClick"];
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", null, "已完成", -1));
const _hoisted_21 = { class: "task-list" };
const _hoisted_22 = ["onDragstart", "onDrop"];
const _hoisted_23 = ["onClick"];
const _hoisted_24 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    _hoisted_3,
    createBaseVNode("div", _hoisted_4, [
      withDirectives(createBaseVNode("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.newTask = $event),
        placeholder: "输入新任务",
        onKeyup: _cache[1] || (_cache[1] = withKeys((...args) => $setup.addTask && $setup.addTask(...args), ["enter"]))
      }, null, 544), [
        [vModelText, $setup.newTask]
      ]),
      withDirectives(createBaseVNode("select", {
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.newTaskStatus = $event)
      }, _hoisted_8, 512), [
        [vModelSelect, $setup.newTaskStatus]
      ]),
      createBaseVNode("button", {
        onClick: _cache[3] || (_cache[3] = (...args) => $setup.addTask && $setup.addTask(...args))
      }, "添加任务")
    ]),
    createBaseVNode("div", _hoisted_9, [
      createBaseVNode("div", {
        class: normalizeClass(["task-column", { "drag-over": $setup.dragTarget === "todo" }]),
        onDragover: _cache[8] || (_cache[8] = withModifiers(() => {
        }, ["prevent"])),
        onDrop: _cache[9] || (_cache[9] = ($event) => $setup.onDropColumn("todo"))
      }, [
        _hoisted_10,
        createBaseVNode("ul", _hoisted_11, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.getTasksByStatus("todo"), (task) => {
            return openBlock(), createElementBlock("li", {
              key: task.id,
              class: normalizeClass(["task-item", { "dragging": $setup.currentDragTask === task }]),
              draggable: "true",
              onDragstart: ($event) => $setup.dragstart($event, task),
              onDragover: _cache[4] || (_cache[4] = withModifiers(() => {
              }, ["prevent"])),
              onDrop: ($event) => $setup.onTaskDrop("todo", task),
              onDragend: _cache[5] || (_cache[5] = ($event) => $setup.dragend($event))
            }, [
              createBaseVNode("span", {
                class: normalizeClass({ completed: task.completed }),
                onClick: ($event) => $setup.toggleTaskCompletion(task)
              }, toDisplayString(task.name), 11, _hoisted_13),
              createBaseVNode("button", {
                class: "delete-btn",
                onClick: ($event) => $setup.deleteTask(task)
              }, "删除", 8, _hoisted_14)
            ], 42, _hoisted_12);
          }), 128)),
          createBaseVNode("li", {
            class: "task-item drop-target",
            onDragover: _cache[6] || (_cache[6] = withModifiers(() => {
            }, ["prevent"])),
            onDrop: _cache[7] || (_cache[7] = ($event) => $setup.onTaskDrop("todo", null))
          }, null, 32)
        ])
      ], 34),
      createBaseVNode("div", {
        class: normalizeClass(["task-column", { "drag-over": $setup.dragTarget === "inProgress" }]),
        onDragover: _cache[14] || (_cache[14] = withModifiers(() => {
        }, ["prevent"])),
        onDrop: _cache[15] || (_cache[15] = ($event) => $setup.onDropColumn("inProgress"))
      }, [
        _hoisted_15,
        createBaseVNode("ul", _hoisted_16, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.getTasksByStatus("inProgress"), (task) => {
            return openBlock(), createElementBlock("li", {
              key: task.id,
              class: normalizeClass(["task-item", { "dragging": $setup.currentDragTask === task }]),
              draggable: "true",
              onDragstart: ($event) => $setup.dragstart($event, task),
              onDragover: _cache[10] || (_cache[10] = withModifiers(() => {
              }, ["prevent"])),
              onDrop: ($event) => $setup.onTaskDrop("inProgress", task),
              onDragend: _cache[11] || (_cache[11] = ($event) => $setup.dragend($event))
            }, [
              createBaseVNode("span", {
                class: normalizeClass({ completed: task.completed }),
                onClick: ($event) => $setup.toggleTaskCompletion(task)
              }, toDisplayString(task.name), 11, _hoisted_18),
              createBaseVNode("button", {
                class: "delete-btn",
                onClick: ($event) => $setup.deleteTask(task)
              }, "删除", 8, _hoisted_19)
            ], 42, _hoisted_17);
          }), 128)),
          createBaseVNode("li", {
            class: "task-item drop-target",
            onDragover: _cache[12] || (_cache[12] = withModifiers(() => {
            }, ["prevent"])),
            onDrop: _cache[13] || (_cache[13] = ($event) => $setup.onTaskDrop("inProgress", null))
          }, null, 32)
        ])
      ], 34),
      createBaseVNode("div", {
        class: normalizeClass(["task-column", { "drag-over": $setup.dragTarget === "completed" }]),
        onDragover: _cache[20] || (_cache[20] = withModifiers(() => {
        }, ["prevent"])),
        onDrop: _cache[21] || (_cache[21] = ($event) => $setup.onDropColumn("completed"))
      }, [
        _hoisted_20,
        createBaseVNode("ul", _hoisted_21, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.getTasksByStatus("completed"), (task) => {
            return openBlock(), createElementBlock("li", {
              key: task.id,
              class: normalizeClass(["task-item", { "dragging": $setup.currentDragTask === task }]),
              draggable: "true",
              onDragstart: ($event) => $setup.dragstart($event, task),
              onDragover: _cache[16] || (_cache[16] = withModifiers(() => {
              }, ["prevent"])),
              onDrop: ($event) => $setup.onTaskDrop("completed", task),
              onDragend: _cache[17] || (_cache[17] = ($event) => $setup.dragend($event))
            }, [
              createBaseVNode("span", {
                class: normalizeClass({ completed: task.completed }),
                onClick: ($event) => $setup.toggleTaskCompletion(task)
              }, toDisplayString(task.name), 11, _hoisted_23),
              createBaseVNode("button", {
                class: "delete-btn",
                onClick: ($event) => $setup.deleteTask(task)
              }, "删除", 8, _hoisted_24)
            ], 42, _hoisted_22);
          }), 128)),
          createBaseVNode("li", {
            class: "task-item drop-target",
            onDragover: _cache[18] || (_cache[18] = withModifiers(() => {
            }, ["prevent"])),
            onDrop: _cache[19] || (_cache[19] = ($event) => $setup.onTaskDrop("completed", null))
          }, null, 32)
        ])
      ], 34)
    ])
  ]);
}
const List = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bafb0346"]]);
export {
  List as default
};
