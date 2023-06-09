if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$7 = {
    data() {
      return {
        "loginOrRegister": false,
        "showStatus": "快注册"
      };
    },
    methods: {
      showTowPage() {
        if (this.loginOrRegister) {
          this.showStatus = "快注册";
          this.loginOrRegister = false;
        } else {
          this.showStatus = "去登录";
          this.loginOrRegister = true;
        }
      },
      dueRequest() {
        if (this.loginOrRegister) {
          formatAppLog("log", "at pages/login/login.vue:45", "注册");
        } else {
          formatAppLog("log", "at pages/login/login.vue:47", "登录");
          uni.switchTab({
            url: "/pages/index/index"
          });
        }
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "login" }, [
      vue.createElementVNode("image", {
        src: "/static/bg-3.jpg",
        mode: ""
      }),
      vue.createElementVNode("view", { class: "login-form" }, [
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "title" }, "用户名"),
          vue.createElementVNode("input", {
            class: "uni-input",
            type: "text",
            focus: "",
            placeholder: ""
          })
        ]),
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "title" }, "密码"),
          vue.createElementVNode("input", {
            class: "uni-input",
            type: "password",
            placeholder: ""
          })
        ]),
        $data.loginOrRegister ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "form-item"
        }, [
          vue.createElementVNode("view", { class: "title" }, "确认密码"),
          vue.createElementVNode("input", {
            class: "uni-input",
            type: "password",
            placeholder: ""
          })
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "form-item item-btns" }, [
          vue.createElementVNode(
            "button",
            {
              type: "default",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.showTowPage && $options.showTowPage(...args)),
              class: "btn-1"
            },
            vue.toDisplayString($data.showStatus),
            1
            /* TEXT */
          ),
          vue.createElementVNode("button", {
            type: "primary",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.dueRequest && $options.dueRequest(...args)),
            class: "btn-2"
          }, "GO")
        ])
      ])
    ]);
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-e4e4508d"], ["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/pages/login/login.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {
        //初始化点击位置的x坐标
        startX: 0,
        showDelButton: false,
        chatItems: []
        // 存储chat-item的状态
      };
    },
    onShow() {
      this.setTabbarColor();
    },
    created() {
      const chatItemsCount = 2;
      for (let i = 0; i < chatItemsCount; i++) {
        this.chatItems.push({
          showDelButton: false,
          startX: 0
        });
      }
    },
    methods: {
      setTabbarColor() {
        uni.setTabBarStyle({
          backgroundColor: "#171425",
          selectedColor: "#fff"
        });
        uni.setNavigationBarColor({
          frontColor: "#ffffff",
          backgroundColor: "#2f2c4d"
        });
      },
      toChat(index) {
        uni.navigateTo({
          url: "/pages/chat/detail/detail?userid=" + index
        });
      },
      touchStart(event, toIndex) {
        this.chatItems[toIndex].startX = event.touches[0].clientX;
      },
      touchEnd(event, toIndex) {
        const endX = event.changedTouches[0].clientX;
        const diff = endX - this.chatItems[toIndex].startX;
        formatAppLog("log", "at pages/chat/chat.vue:96", diff);
        if (Math.abs(diff) >= 50 || diff == 0) {
          if (diff > 0) {
            this.chatItems[toIndex].showDelButton = false;
          } else {
            this.chatItems[toIndex].showDelButton = true;
          }
        }
      },
      clickButton(index) {
        formatAppLog("log", "at pages/chat/chat.vue:107", "点击按钮");
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "chat" }, [
      vue.createElementVNode("view", { class: "status_bar" }, [
        vue.createCommentVNode(" 这里是状态栏 ")
      ]),
      vue.createElementVNode("view", { class: "chat-header" }, [
        vue.createElementVNode("span", null, "我的会话")
      ]),
      vue.createElementVNode("view", { class: "chat-items" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.chatItems, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "chat-item",
              key: index,
              onTouchstart: ($event) => $options.touchStart($event, index),
              onTouchend: ($event) => $options.touchEnd($event, index),
              "data-index": "{{index}}"
            }, [
              vue.createElementVNode("image", {
                src: "/static/chat/test1.jpeg",
                mode: ""
              }),
              vue.createElementVNode("view", {
                class: "item-info",
                onClick: ($event) => $options.toChat(index)
              }, [
                vue.createElementVNode("label", { class: "info-name" }, "何益恺"),
                vue.createElementVNode("label", { class: "info-last-content" }, " 123123123123123 ")
              ], 8, ["onClick"]),
              vue.createElementVNode("label", null, "2018/12/10 19:58"),
              vue.withDirectives(vue.createElementVNode("button", {
                size: "mini",
                onClick: ($event) => $options.clickButton(index)
              }, "DEL", 8, ["onClick"]), [
                [vue.vShow, item.showDelButton]
              ])
            ], 40, ["onTouchstart", "onTouchend"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesChatChat = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-0a633310"], ["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/pages/chat/chat.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {};
    },
    onShow() {
      this.setTabbarColor();
    },
    methods: {
      setTabbarColor() {
        uni.setTabBarStyle({
          backgroundColor: "#fff",
          selectedColor: "#7967fd"
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "my" }, [
      vue.createElementVNode("view", { class: "header-info" }, [
        vue.createElementVNode("image", {
          src: "/static/chat/test1.jpeg",
          mode: ""
        }),
        vue.createElementVNode("label", { for: "" }, "早上好，XXX")
      ]),
      vue.createElementVNode("view", { class: "my-vip" }, [
        vue.createElementVNode("label", {
          for: "",
          class: "vip-title"
        }, "我的会员"),
        vue.createElementVNode("view", { class: "vip-type" }, [
          vue.createElementVNode("image", {
            src: "/static/my/v1.png",
            mode: ""
          }),
          vue.createElementVNode("label", { for: "" }, "普通会员")
        ])
      ]),
      vue.createElementVNode("view", { class: "my-size" }, [
        vue.createElementVNode("label", { for: "" }, "剩余容量"),
        vue.createElementVNode("progress", {
          percent: 60,
          activeColor: "#2FC1FF",
          "stroke-width": "15",
          "show-info": "",
          "font-size": "15",
          active: "true"
        })
      ]),
      vue.createElementVNode("view", { class: "footer-info" }, [
        vue.createElementVNode("button", { type: "warn" }, "退出登录")
      ])
    ]);
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/pages/my/my.vue"]]);
  const _sfc_main$4 = {
    name: "index-detail",
    data() {
      return {
        webviewStyles: {
          width: "0",
          height: "0"
        },
        allowFile: true,
        fileUrl: "",
        oneFile: "http://www.zjhu.edu.cn/_upload/article/files/33/de/94320a8a4a0196b863a3f0b61537/82ab0240-c688-4b89-95f9-2d753e82e8e7.docx",
        officeUrl: "https://view.officeapps.live.com/op/view.aspx?src="
      };
    },
    components: {},
    created() {
    },
    methods: {
      getFileUrl() {
        this.webviewStyles.height = "500px";
        this.webviewStyles.width = "200px";
        this.fileUrl = this.officeUrl + this.oneFile;
        formatAppLog("log", "at components/index-detail/index-detail.vue:53", this.fileUrl);
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "detail" }, [
      vue.createCommentVNode(" 图标、名称、(大小、时间)、(分享、下载、删除) "),
      vue.createElementVNode("view", { class: "file-icon" }, [
        vue.createElementVNode("image", {
          src: "/static/file/MP4.png",
          mode: ""
        })
      ]),
      vue.createElementVNode("view", { class: "file-title" }, [
        vue.createElementVNode("span", null, "测试文件")
      ]),
      vue.createElementVNode("view", { class: "file-info" }, [
        vue.createElementVNode("span", null, "123MB"),
        vue.createElementVNode("span", null, "2023/05/17 10:09")
      ]),
      vue.createElementVNode("view", { class: "file-btns" }, [
        vue.createElementVNode("button", null, "分享"),
        vue.createElementVNode("button", null, "下载"),
        vue.createElementVNode("button", null, "删除")
      ]),
      vue.createElementVNode("view", { class: "file-content" }, [
        vue.createCommentVNode(' <button @click="getFileUrl()">我要预览</button> '),
        vue.createCommentVNode(' <web-view :src="fileUrl" :webview-styles="webviewStyles"></web-view> ')
      ])
    ]);
  }
  const IndexDetail = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-93c9becd"], ["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/components/index-detail/index-detail.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {
        indicatorDots: true,
        autoplay: true,
        interval: 5e3,
        duration: 500,
        showDetail: false,
        listStyles: {
          // 是否显示边框
          border: false,
          // 是否显示分隔线
          dividline: false,
          // 线条样式
          borderStyle: {
            width: 1,
            color: "blue",
            radius: 2
          }
        }
      };
    },
    components: {
      IndexDetail
    },
    onShow() {
      this.setTabbarColor();
    },
    methods: {
      setTabbarColor() {
        uni.setTabBarStyle({
          backgroundColor: "#fff",
          selectedColor: "#7967fd"
        });
      },
      // 获取上传状态
      select(e) {
        formatAppLog("log", "at pages/index/index.vue:122", "选择文件：", e);
      },
      // 获取上传进度
      progress(e) {
        formatAppLog("log", "at pages/index/index.vue:126", "上传进度：", e);
      },
      // 上传成功
      success(e) {
        formatAppLog("log", "at pages/index/index.vue:131", "上传成功");
      },
      // 上传失败
      fail(e) {
        formatAppLog("log", "at pages/index/index.vue:136", "上传失败：", e);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_IndexDetail = vue.resolveComponent("IndexDetail");
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "uni-margin-wrap" }, [
        vue.createElementVNode("swiper", {
          class: "swiper",
          circular: "",
          "indicator-dots": $data.indicatorDots,
          autoplay: $data.autoplay,
          interval: $data.interval,
          duration: $data.duration
        }, [
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("view", { class: "swiper-item uni-bg-red" }, [
              vue.createElementVNode("image", {
                class: "imgSize",
                src: "https://www.hzvtc.edu.cn/__local/E/F6/A3/6F3DD3B69C002C9151647CAEB19_69D76B05_31CD7.jpg",
                mode: ""
              })
            ])
          ]),
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("view", { class: "swiper-item uni-bg-green" }, [
              vue.createElementVNode("image", {
                class: "imgSize",
                src: "https://www.hzvtc.edu.cn/__local/6/E4/BE/84961BF024B1C1997AB340B50E9_A5FB6A3F_214DA.jpg",
                mode: ""
              })
            ])
          ]),
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("view", { class: "swiper-item uni-bg-blue" }, [
              vue.createElementVNode("image", {
                class: "imgSize",
                src: "https://www.hzvtc.edu.cn/__local/A/18/95/5CF567B0CFC27AF189EBFA8F4A7_FA9F12E9_1A732.jpg",
                mode: ""
              })
            ])
          ])
        ], 8, ["indicator-dots", "autoplay", "interval", "duration"])
      ]),
      vue.createElementVNode("view", { class: "file-nav" }, [
        vue.createElementVNode("view", { class: "nav-home" }, [
          vue.createElementVNode("image", {
            src: "/static/home.png",
            mode: ""
          }),
          vue.createElementVNode("span", null, "主页")
        ]),
        vue.createElementVNode("view", { class: "nav-fl" }, " / "),
        vue.createElementVNode("view", { class: "nav-item" }, " 123 ")
      ]),
      !$data.showDetail ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "file-list"
      }, [
        vue.createElementVNode("view", { class: "list-title" }, [
          vue.createElementVNode("span", null, "名称"),
          vue.createElementVNode("span", null, "大小"),
          vue.createElementVNode("span", null, "操作")
        ]),
        vue.createElementVNode("view", { class: "list-items" }, [
          vue.createElementVNode("view", { class: "one-item" }, [
            vue.createElementVNode("view", { class: "item-name" }, [
              vue.createElementVNode("image", {
                src: "/static/file/wenjianjia.png",
                mode: ""
              }),
              vue.createElementVNode("span", null, "这是文件夹名称这是文件夹名称这是文件夹名称")
            ]),
            vue.createElementVNode("view", { class: "item-size" }, " 999MB "),
            vue.createElementVNode("view", { class: "item-btns" }, [
              vue.createElementVNode("button", {
                type: "primary",
                size: "mini"
              }, "✔"),
              vue.createElementVNode("button", {
                type: "warn",
                size: "mini"
              }, "✖")
            ])
          ])
        ])
      ])) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "file-detail"
      }, [
        vue.createVNode(_component_IndexDetail)
      ])),
      !$data.showDetail ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "file-upload-uni"
      }, [
        vue.createElementVNode("input", {
          type: "file",
          class: "upload-uni-btn"
        })
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(' <view class="file-upload"> '),
      vue.createCommentVNode(' <uni-icons type="upload" size="50"></uni-icons> '),
      vue.createCommentVNode(" </view> ")
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/pages/index/index.vue"]]);
  const icons = {
    "id": "2852637",
    "name": "uniui图标库",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$2 = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-d31e1c47"], ["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    onLoad(options) {
      formatAppLog("log", "at pages/chat/detail/detail.vue:65", options.userid);
    },
    onShow() {
      this.updateHeaderStyle();
    },
    methods: {
      updateHeaderStyle() {
        uni.setNavigationBarColor({
          frontColor: "#ffffff",
          backgroundColor: "#171425"
        });
      },
      addTest() {
        formatAppLog("log", "at pages/chat/detail/detail.vue:78", "动态添加信息");
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "chat-detail" }, [
      vue.createCommentVNode(" 时间每分钟检测一次，若在新的一分钟内发送信息，则刷新时间并插入 "),
      vue.createElementVNode("view", { class: "detail-time" }, [
        vue.createElementVNode("label", null, "2018-12-10 21:51")
      ]),
      vue.createElementVNode("view", { class: "detail-body" }, [
        vue.createElementVNode("view", { class: "body-left" }, [
          vue.createElementVNode("view", { class: "left-img" }, [
            vue.createElementVNode("image", {
              src: "/static/chat/test1.jpeg",
              mode: ""
            }),
            vue.createCommentVNode(' <view class="left-status status-online"></view> '),
            vue.createElementVNode("view", { class: "left-status status-offline" })
          ]),
          vue.createElementVNode("view", { class: "left-info" }, [
            vue.createElementVNode("label", { for: "" }, "小李"),
            vue.createElementVNode("view", { class: "info-content" }, [
              vue.createElementVNode("label", { for: "" }, " 国台办发言人马晓光19日答记者问表示，经向有关主管部门了解，即日起恢复旅行社经营台湾居民来大陆团队游业务。我们热忱欢迎台湾同胞来大陆旅游观光，游览大好河山，看看各地发展新貌。 ")
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "body-right" }, [
          vue.createElementVNode("view", { class: "right-info" }, [
            vue.createElementVNode("label", { for: "" }, "我"),
            vue.createElementVNode("view", { class: "info-content" }, [
              vue.createCommentVNode(' <label for=""> '),
              vue.createCommentVNode(" 国台办发言人马晓光19日答记者问表示，经向有关主管部门了解，即日起恢复旅行社经营台湾居民来大陆团队游业务。我们热忱欢迎台湾同胞来大陆旅游观光，游览大好河山，看看各地发展新貌。 "),
              vue.createCommentVNode(" </label> "),
              vue.createCommentVNode(' <image src="../../../static/bg-1.jpg" mode=""></image> '),
              vue.createElementVNode("navigator", {
                url: "/pages/index/index",
                "open-type": "switchTab"
              }, "分享给你的文件")
            ])
          ]),
          vue.createElementVNode("view", { class: "right-img" }, [
            vue.createElementVNode("image", {
              src: "/static/chat/test2.jpeg",
              mode: ""
            }),
            vue.createElementVNode("view", { class: "right-status status-online" }),
            vue.createCommentVNode(' <view class="right-status status-offline"></view> ')
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "detail-footer" }, [
        vue.createCommentVNode(" 包含输入框、表情符、(文件/发送按钮) "),
        vue.createElementVNode("view", { class: "footer-main" }, [
          vue.createElementVNode("input", {
            type: "text",
            placeholder: "你想说什么"
          }),
          vue.createElementVNode("view", { class: "main-btns" }, [
            vue.createVNode(_component_uni_icons, {
              type: "paperclip",
              size: "30",
              color: "#fff"
            }),
            vue.createVNode(_component_uni_icons, {
              onClick: $options.addTest,
              type: "paperplane",
              size: "30",
              color: "#fff"
            }, null, 8, ["onClick"])
          ])
        ]),
        vue.createElementVNode("view", { class: "footer-other" }, " 暂时不放东西 ")
      ])
    ]);
  }
  const PagesChatDetailDetail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-df6a20b5"], ["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/pages/chat/detail/detail.vue"]]);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/chat/chat", PagesChatChat);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/chat/detail/detail", PagesChatDetailDetail);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
