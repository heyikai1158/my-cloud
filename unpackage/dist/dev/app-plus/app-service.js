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
(function(vue) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$5 = {
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
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/pages/login/login.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {
        //初始化点击位置的x坐标
        startX: 0
      };
    },
    onShow() {
      this.setTabbarColor();
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
      touchStart: function(e) {
        if (e.touches.length == 1) {
          this.startX = e.touches[0].clientX;
        }
      },
      touchEnd: function(e) {
        if (e.changedTouches.length == 1) {
          var endX = e.changedTouches[0].clientX;
          let diff = endX - this.startX;
          if (Math.abs(diff) > 50) {
            if (diff > 0) {
              formatAppLog("log", "at pages/chat/chat.vue:76", "左滑...");
            }
          }
        }
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "chat" }, [
      vue.createElementVNode("view", { class: "status_bar" }, [
        vue.createCommentVNode(" 这里是状态栏 ")
      ]),
      vue.createElementVNode("view", { class: "chat-header" }, [
        vue.createElementVNode("span", null, "我的会话")
      ]),
      vue.createElementVNode("view", { class: "chat-items" }, [
        vue.createElementVNode(
          "view",
          {
            class: "chat-item",
            onTouchstart: _cache[0] || (_cache[0] = (...args) => $options.touchStart && $options.touchStart(...args)),
            onTouchend: _cache[1] || (_cache[1] = (...args) => $options.touchEnd && $options.touchEnd(...args))
          },
          [
            vue.createElementVNode("image", {
              src: "/static/chat/qun.png",
              mode: ""
            }),
            vue.createElementVNode("view", { class: "item-info" }, [
              vue.createElementVNode("label", { class: "info-name" }, "何益恺"),
              vue.createElementVNode("label", { class: "info-last-content" }, " 123123123123123 ")
            ]),
            vue.createElementVNode("label", null, "2018/12/10 19:58"),
            vue.createElementVNode("button", { size: "mini" }, "DEL")
          ],
          32
          /* HYDRATE_EVENTS */
        ),
        vue.createElementVNode(
          "view",
          {
            class: "chat-item",
            onTouchstart: _cache[2] || (_cache[2] = (...args) => $options.touchStart && $options.touchStart(...args)),
            onTouchend: _cache[3] || (_cache[3] = (...args) => $options.touchEnd && $options.touchEnd(...args))
          },
          [
            vue.createElementVNode("image", {
              src: "/static/chat/qun.png",
              mode: ""
            }),
            vue.createElementVNode("view", { class: "item-info" }, [
              vue.createElementVNode("label", { class: "info-name" }, "何益恺"),
              vue.createElementVNode("label", { class: "info-last-content" }, " 123123123123123 ")
            ]),
            vue.createElementVNode("label", null, "2018/12/10 19:58"),
            vue.createElementVNode("button", {
              size: "mini",
              class: "btn-in"
            }, "DEL")
          ],
          32
          /* HYDRATE_EVENTS */
        )
      ])
    ]);
  }
  const PagesChatChat = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/pages/chat/chat.vue"]]);
  const _sfc_main$3 = {
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
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/pages/my/my.vue"]]);
  const _sfc_main$2 = {
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
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
  const IndexDetail = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-93c9becd"], ["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/components/index-detail/index-detail.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        indicatorDots: true,
        autoplay: true,
        interval: 5e3,
        duration: 500,
        showDetail: false
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
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
      ]))
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/pages/index/index.vue"]]);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/chat/chat", PagesChatChat);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("pages/index/index", PagesIndexIndex);
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
})(Vue);
