"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  onShow() {
    this.setTabbarColor();
  },
  methods: {
    setTabbarColor() {
      common_vendor.index.setTabBarStyle({
        backgroundColor: "#171425",
        selectedColor: "#fff"
      });
      common_vendor.index.setNavigationBarColor({
        frontColor: "#ffffff",
        backgroundColor: "#2f2c4d"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/pages/chat/chat.vue"]]);
wx.createPage(MiniProgramPage);
