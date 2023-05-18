"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
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
      common_vendor.index.setTabBarStyle({
        backgroundColor: "#171425",
        selectedColor: "#fff"
      });
      common_vendor.index.setNavigationBarColor({
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
        if (Math.abs(diff) >= 50) {
          console.log("打印" + diff);
          if (diff >= 0) {
            console.log("左滑");
            console.log(e);
            e.target.querySelector("button").classList.remove("show-btn");
          } else {
            console.log("右滑");
            e.target.querySelector("button").classList.add("show-btn");
          }
        }
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.touchStart && $options.touchStart(...args)),
    b: common_vendor.o((...args) => $options.touchEnd && $options.touchEnd(...args)),
    c: common_vendor.o((...args) => $options.touchStart && $options.touchStart(...args)),
    d: common_vendor.o((...args) => $options.touchEnd && $options.touchEnd(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/pages/chat/chat.vue"]]);
wx.createPage(MiniProgramPage);
