import { _ as _export_sfc, b as getCurrentInstance, r as ref, f as resolveComponent, h as openBlock, m as createBlock, w as withCtx, k as createVNode, s as createTextVNode, j as createBaseVNode, t as toDisplayString, p as createCommentVNode, i as createElementBlock, F as Fragment, n as renderList, y as nextTick, l as withModifiers, q as withKeys } from "./index-347654a5.js";
const UpdateEdit_vue_vue_type_style_index_0_scoped_61d5ef71_lang = "";
const _hoisted_1$2 = { class: "file-name" };
const _hoisted_2$2 = { class: "update-desc-item" };
const _hoisted_3$2 = { class: "update-desc" };
const _hoisted_4$1 = { class: "num" };
const _hoisted_5$1 = { class: "input" };
const _hoisted_6$1 = ["onClick"];
const _sfc_main$2 = {
  __name: "UpdateEdit",
  emits: ["reload"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { proxy } = getCurrentInstance();
    const dialogConfig = ref({
      show: false,
      title: "发布更新",
      buttons: [
        {
          type: "primary",
          text: "确定",
          click: (e) => {
            submitForm();
          }
        }
      ]
    });
    const formData = ref({ updateDescList: [] });
    const formDataRef = ref();
    const rules = {
      version: [
        { required: true, message: "请输入版本号" },
        { validator: proxy.Verify.version, message: "版本号只能是数字和点" }
      ],
      fileType: [{ required: true, message: "请选择文件类型" }],
      fileName: [{ required: true, message: "请选择更新文件" }],
      outerLink: [{ required: true, message: "请输入外链地址" }],
      updateType: [{ required: true, message: "请选择更新类型" }]
    };
    const selectFile = (file) => {
      file = file.file;
      formData.value.file = file;
      formData.value.fileName = file.name;
    };
    const addLine = () => {
      formData.value.updateDescList.push({
        title: ""
      });
    };
    const delLie = (index) => {
      formData.value.updateDescList.splice(index, 1);
    };
    const emit = __emit;
    const submitForm = () => {
      formDataRef.value.validate(async (valid) => {
        if (!valid) {
          return;
        }
        let params = {};
        Object.assign(params, formData.value);
        const updateDescArray = params.updateDescList.map((item) => {
          return item.title;
        });
        params.updateDesc = updateDescArray.join("|");
        delete params.updateDescList;
        let result = await proxy.Request({
          url: proxy.Api.saveUpdate,
          params
        });
        if (!result) {
          return;
        }
        dialogConfig.value.show = false;
        emit("reload");
      });
    };
    const showEdit = (data) => {
      dialogConfig.value.show = true;
      nextTick(() => {
        formDataRef.value.resetFields();
        if (data) {
          data.updateDescList = data.updateDescArray.map((item) => {
            return { title: item };
          });
          data.fileName = "G-Chat." + data.version + ".exe";
        }
        formData.value = Object.assign(
          {},
          data || {
            updateDescList: [{ title: "" }]
          }
        );
      });
    };
    __expose({
      showEdit
    });
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_radio = resolveComponent("el-radio");
      const _component_el_radio_group = resolveComponent("el-radio-group");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_upload = resolveComponent("el-upload");
      const _component_el_form = resolveComponent("el-form");
      const _component_Dialog = resolveComponent("Dialog");
      return openBlock(), createBlock(_component_Dialog, {
        title: dialogConfig.value.title,
        buttons: dialogConfig.value.buttons,
        show: dialogConfig.value.show,
        onClose: _cache[3] || (_cache[3] = ($event) => dialogConfig.value.show = false),
        width: "500px"
      }, {
        default: withCtx(() => [
          createVNode(_component_el_form, {
            ref_key: "formDataRef",
            ref: formDataRef,
            model: formData.value,
            rules,
            "label-width": "100px"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_form_item, {
                label: "版本号",
                prop: "version"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    maxLength: 10,
                    modelValue: formData.value.version,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.version = $event),
                    placeholder: "eg:1.0.0"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "文件类型",
                prop: "fileType"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_radio_group, {
                    modelValue: formData.value.fileType,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.fileType = $event)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_radio, { label: 0 }, {
                        default: withCtx(() => [
                          createTextVNode("本地文件")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_radio, { label: 1 }, {
                        default: withCtx(() => [
                          createTextVNode("外链")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              formData.value.fileType == 0 ? (openBlock(), createBlock(_component_el_form_item, {
                key: 0,
                label: "文件",
                prop: "fileName",
                class: "file-select"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1$2, toDisplayString(formData.value.fileName), 1),
                  createVNode(_component_el_upload, {
                    name: "file",
                    "show-file-list": false,
                    accept: ".exe",
                    multiple: false,
                    "http-request": selectFile
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_button, {
                        type: "primary",
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("选择文件")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              formData.value.fileType == 1 ? (openBlock(), createBlock(_component_el_form_item, {
                key: 1,
                label: "外链地址",
                prop: "outerLink"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    maxLength: 200,
                    modelValue: formData.value.outerLink,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.value.outerLink = $event),
                    placeholder: "请输入完整的外链地址"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_el_form_item, {
                label: "更新内容",
                class: "updte-form-item"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(formData.value.updateDescList, (item, index) => {
                    return openBlock(), createElementBlock("div", _hoisted_2$2, [
                      createVNode(_component_el_form_item, {
                        prop: "updateDescList." + index + ".title",
                        rules: {
                          required: true,
                          message: "更新内容不能为空"
                        }
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_3$2, [
                            createBaseVNode("div", _hoisted_4$1, toDisplayString(index + 1), 1),
                            createBaseVNode("div", _hoisted_5$1, [
                              createVNode(_component_el_input, {
                                maxLength: 11,
                                modelValue: item.title,
                                "onUpdate:modelValue": ($event) => item.title = $event,
                                placeholder: "请输入更新内容"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            index == 0 ? (openBlock(), createElementBlock("div", {
                              key: 0,
                              class: "iconfont icon-add",
                              onClick: addLine
                            })) : createCommentVNode("", true),
                            index > 0 ? (openBlock(), createElementBlock("div", {
                              key: 1,
                              class: "iconfont btn-del",
                              onClick: ($event) => delLie(index)
                            }, "删除", 8, _hoisted_6$1)) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["prop"])
                    ]);
                  }), 256))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        _: 1
      }, 8, ["title", "buttons", "show"]);
    };
  }
};
const UpdateEdit = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-61d5ef71"]]);
const UpdatePost_vue_vue_type_style_index_0_scoped_69e5ba90_lang = "";
const _hoisted_1$1 = { class: "tag-panel" };
const _hoisted_2$1 = {
  key: 0,
  class: "tag input"
};
const _hoisted_3$1 = {
  key: 1,
  class: "tag"
};
const _sfc_main$1 = {
  __name: "UpdatePost",
  emits: ["reload"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { proxy } = getCurrentInstance();
    const dialogConfig = ref({
      show: false,
      title: "发布更新",
      buttons: [
        {
          type: "primary",
          text: "确定",
          click: (e) => {
            submitForm();
          }
        }
      ]
    });
    const formData = ref({});
    const formDataRef = ref();
    const rules = {
      status: [{ required: true, message: "请选择发布状态" }]
    };
    const emit = __emit;
    const submitForm = () => {
      formDataRef.value.validate(async (valid) => {
        if (!valid) {
          return;
        }
        let params = {};
        Object.assign(params, formData.value);
        params.grayscaleUid = params.grayscaleUid.join(",");
        let result = await proxy.Request({
          url: proxy.Api.postUpdate,
          params
        });
        if (!result) {
          return;
        }
        dialogConfig.value.show = false;
        emit("reload");
      });
    };
    const showEdit = (data) => {
      dialogConfig.value.show = true;
      nextTick(() => {
        formDataRef.value.resetFields();
        formData.value = Object.assign({
          id: data.id,
          version: data.version,
          status: data.status,
          grayscaleUid: data.grayscaleUid ? data.grayscaleUid.split(",") : []
        });
      });
    };
    const showInput = ref(false);
    const tagInput = ref();
    const addDeviceId = () => {
      if (tagInput.value) {
        formData.value.grayscaleUid.push(tagInput.value);
      }
      tagInput.value = "";
      showInput.value = false;
    };
    const showInputHandler = () => {
      showInput.value = true;
    };
    const closeTag = (index) => {
      formData.value.grayscaleUid.splice(index, 1);
    };
    __expose({
      showEdit
    });
    return (_ctx, _cache) => {
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_radio = resolveComponent("el-radio");
      const _component_el_radio_group = resolveComponent("el-radio-group");
      const _component_el_tag = resolveComponent("el-tag");
      const _component_el_input = resolveComponent("el-input");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_form = resolveComponent("el-form");
      const _component_Dialog = resolveComponent("Dialog");
      return openBlock(), createBlock(_component_Dialog, {
        title: dialogConfig.value.title,
        buttons: dialogConfig.value.buttons,
        show: dialogConfig.value.show,
        onClose: _cache[3] || (_cache[3] = ($event) => dialogConfig.value.show = false),
        width: "600px"
      }, {
        default: withCtx(() => [
          createVNode(_component_el_form, {
            ref_key: "formDataRef",
            ref: formDataRef,
            model: formData.value,
            rules,
            "label-width": "100px",
            onSubmit: _cache[2] || (_cache[2] = withModifiers(() => {
            }, ["prevent"]))
          }, {
            default: withCtx(() => [
              createVNode(_component_el_form_item, { label: "版本号" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(formData.value.version), 1)
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "发布状态",
                prop: "status"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_radio_group, {
                    modelValue: formData.value.status,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.status = $event)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_radio, { label: 0 }, {
                        default: withCtx(() => [
                          createTextVNode("取消发布")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_radio, { label: 1 }, {
                        default: withCtx(() => [
                          createTextVNode("灰度发布")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_radio, { label: 2 }, {
                        default: withCtx(() => [
                          createTextVNode("全网发布")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              formData.value.status == 1 ? (openBlock(), createBlock(_component_el_form_item, {
                key: 0,
                label: "灰度UID",
                prop: "grayscaleUid"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1$1, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(formData.value.grayscaleUid, (tag, index) => {
                      return openBlock(), createBlock(_component_el_tag, {
                        key: tag,
                        closable: "",
                        onClose: ($event) => closeTag(index),
                        type: tag.type,
                        class: "tag"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(tag), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClose", "type"]);
                    }), 128)),
                    showInput.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
                      createVNode(_component_el_input, {
                        size: "small",
                        clearable: "",
                        placeholder: "请输入UID",
                        modelValue: tagInput.value,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => tagInput.value = $event),
                        modelModifiers: { trim: true },
                        onBlur: addDeviceId,
                        onKeyup: withKeys(addDeviceId, ["enter"])
                      }, null, 8, ["modelValue"])
                    ])) : createCommentVNode("", true),
                    !showInput.value ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                      createVNode(_component_el_button, {
                        type: "primary",
                        size: "small",
                        onClick: showInputHandler
                      }, {
                        default: withCtx(() => [
                          createTextVNode("新增")
                        ]),
                        _: 1
                      })
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        _: 1
      }, 8, ["title", "buttons", "show"]);
    };
  }
};
const UpdatePost = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-69e5ba90"]]);
const _hoisted_1 = { class: "top-panel" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = {
  key: 0,
  style: { "color": "#f56c6c" }
};
const _hoisted_5 = {
  key: 1,
  style: { "color": "#f7ba2a" }
};
const _hoisted_6 = {
  key: 2,
  style: { "color": "#529b2e" }
};
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", { class: "iconfont icon-more" }, null, -1);
const _sfc_main = {
  __name: "Update",
  setup(__props) {
    const { proxy } = getCurrentInstance();
    const searchFormData = ref({});
    const tableData = ref({});
    const tableOptions = {};
    const columns = [
      {
        label: "版本",
        prop: "version",
        width: 120
      },
      {
        label: "更新内容",
        prop: "updateDesc",
        scopedSlots: "slotUpdateDesc",
        width: 200
      },
      {
        label: "发布时间",
        prop: "createTime",
        width: 180
      },
      {
        label: "文件类型",
        prop: "fileType",
        scopedSlots: "fileTypeSlot"
      },
      {
        label: "状态",
        prop: "status",
        scopedSlots: "slotStatus",
        width: 80
      },
      {
        label: "操作",
        prop: "operation",
        scopedSlots: "slotOperation",
        width: 80
      }
    ];
    const searchForm = ref({});
    const loadDataList = async () => {
      let params = {
        pageNo: tableData.value.pageNo,
        pageSize: tableData.value.pageSize
      };
      if (searchFormData.value.createTimeRange) {
        params.createTimeStart = searchFormData.value.createTimeRange[0];
        params.createTimeEnd = searchFormData.value.createTimeRange[1];
      }
      delete params.createTimeRange;
      Object.assign(params, searchForm.value);
      let result = await proxy.Request({
        url: proxy.Api.loadUpdateDataList,
        params
      });
      if (!result) {
        return;
      }
      tableData.value = result.data;
    };
    const updateEditRef = ref();
    const showEdit = (data) => {
      updateEditRef.value.showEdit(data);
    };
    const del = (data) => {
      proxy.Confirm({
        message: `确定要删除【${data.version}】吗？`,
        okfun: async () => {
          let result = await proxy.Request({
            url: proxy.Api.delUpdate,
            params: {
              id: data.id
            }
          });
          if (!result) {
            return;
          }
          proxy.Message.success("删除成功");
          loadDataList();
        }
      });
    };
    const updatePostRef = ref();
    const updatePost = (data) => {
      updatePostRef.value.showEdit(data);
    };
    return (_ctx, _cache) => {
      const _component_el_date_picker = resolveComponent("el-date-picker");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_row = resolveComponent("el-row");
      const _component_el_form = resolveComponent("el-form");
      const _component_el_card = resolveComponent("el-card");
      const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
      const _component_el_dropdown = resolveComponent("el-dropdown");
      const _component_Table = resolveComponent("Table");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_el_card, null, {
            default: withCtx(() => [
              createVNode(_component_el_form, {
                model: searchForm.value,
                "label-width": "70px",
                "label-position": "right"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_col, { span: 5 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, {
                            label: "发布日期",
                            "label-width": "70px"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_date_picker, {
                                modelValue: searchFormData.value.createTimeRange,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchFormData.value.createTimeRange = $event),
                                type: "daterange",
                                "range-separator": "~",
                                "start-placeholder": "开始日期",
                                "end-placeholder": "结束日期",
                                "value-format": "YYYY-MM-DD",
                                onChange: loadDataList
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_col, {
                        span: 4,
                        style: { paddingLeft: "10px" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_button, {
                            type: "success",
                            onClick: _cache[1] || (_cache[1] = ($event) => loadDataList())
                          }, {
                            default: withCtx(() => [
                              createTextVNode("查询 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_button, {
                            type: "primary",
                            onClick: _cache[2] || (_cache[2] = ($event) => showEdit())
                          }, {
                            default: withCtx(() => [
                              createTextVNode("发布版本 ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model"])
            ]),
            _: 1
          })
        ]),
        createVNode(_component_el_card, { class: "table-data-card" }, {
          default: withCtx(() => [
            createVNode(_component_Table, {
              columns,
              fetch: loadDataList,
              dataSource: tableData.value,
              options: tableOptions
            }, {
              slotUpdateDesc: withCtx(({ index, row }) => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(row.updateDescArray, (item, num) => {
                  return openBlock(), createElementBlock("div", null, toDisplayString(num + 1) + "、" + toDisplayString(item), 1);
                }), 256))
              ]),
              fileTypeSlot: withCtx(({ index, row }) => [
                row.fileType == 0 ? (openBlock(), createElementBlock("div", _hoisted_2, "本地文件")) : createCommentVNode("", true),
                row.fileType == 1 ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(row.outerLink), 1)) : createCommentVNode("", true)
              ]),
              slotStatus: withCtx(({ index, row }) => [
                row.status == 0 ? (openBlock(), createElementBlock("div", _hoisted_4, "未发布")) : createCommentVNode("", true),
                row.status == 1 ? (openBlock(), createElementBlock("div", _hoisted_5, "灰度发布")) : createCommentVNode("", true),
                row.status == 2 ? (openBlock(), createElementBlock("div", _hoisted_6, "全网发布")) : createCommentVNode("", true)
              ]),
              slotOperation: withCtx(({ index, row }) => [
                createVNode(_component_el_dropdown, {
                  placement: "bottom-end",
                  trigger: "click"
                }, {
                  dropdown: withCtx(() => [
                    row.status == 0 ? (openBlock(), createBlock(_component_el_dropdown_item, {
                      key: 0,
                      onClick: ($event) => showEdit(row)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("修改")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : createCommentVNode("", true),
                    createVNode(_component_el_dropdown_item, {
                      onClick: ($event) => updatePost(row)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("发布")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    row.status == 0 ? (openBlock(), createBlock(_component_el_dropdown_item, {
                      key: 1,
                      onClick: ($event) => del(row)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("删除")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : createCommentVNode("", true)
                  ]),
                  default: withCtx(() => [
                    _hoisted_7
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 1
            }, 8, ["dataSource"])
          ]),
          _: 1
        }),
        createVNode(UpdateEdit, {
          ref_key: "updateEditRef",
          ref: updateEditRef,
          onReload: loadDataList
        }, null, 512),
        createVNode(UpdatePost, {
          ref_key: "updatePostRef",
          ref: updatePostRef,
          onReload: loadDataList
        }, null, 512)
      ]);
    };
  }
};
export {
  _sfc_main as default
};
