"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
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
        console.log("注册");
      } else {
        console.log("登录");
        common_vendor.index.switchTab({
          url: "/pages/index/index"
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.loginOrRegister
  }, $data.loginOrRegister ? {} : {}, {
    b: common_vendor.t($data.showStatus),
    c: common_vendor.o((...args) => $options.showTowPage && $options.showTowPage(...args)),
    d: common_vendor.o((...args) => $options.dueRequest && $options.dueRequest(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e4e4508d"], ["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
