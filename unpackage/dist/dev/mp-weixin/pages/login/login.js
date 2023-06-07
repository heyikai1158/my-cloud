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
        common_vendor.index.request({
          url: "http://localhost:8000/due/login/",
          method: "POST",
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          data: {
            "username": "heyikai",
            "passwd": "123456"
          },
          success: (res) => {
            console.log(res);
            console.log("处理成功");
          }
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
