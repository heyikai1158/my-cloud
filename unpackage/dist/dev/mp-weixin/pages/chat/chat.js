"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
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
      common_vendor.index.setTabBarStyle({
        backgroundColor: "#171425",
        selectedColor: "#fff"
      });
      common_vendor.index.setNavigationBarColor({
        frontColor: "#ffffff",
        backgroundColor: "#2f2c4d"
      });
    },
    toChat(index) {
      common_vendor.index.navigateTo({
        url: "/pages/chat/detail/detail?userid=" + index
      });
    },
    touchStart(event, toIndex) {
      const index = event.currentTarget.dataset.index;
      this.chatItems[index].startX = event.touches[0].clientX;
    },
    touchEnd(event, toIndex) {
      const index = event.currentTarget.dataset.index;
      const endX = event.changedTouches[0].clientX;
      const diff = endX - this.chatItems[index].startX;
      console.log(diff);
      if (Math.abs(diff) >= 50) {
        if (diff > 0) {
          this.chatItems[index].showDelButton = false;
        } else {
          this.chatItems[index].showDelButton = true;
        }
      }
    },
    clickButton(index) {
      console.log("点击按钮");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.chatItems, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.toChat(index), index),
        b: item.showDelButton,
        c: common_vendor.o(($event) => $options.clickButton(index), index),
        d: index,
        e: common_vendor.o(($event) => $options.touchStart($event, index), index),
        f: common_vendor.o(($event) => $options.touchEnd($event, index), index)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0a633310"], ["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/pages/chat/chat.vue"]]);
wx.createPage(MiniProgramPage);
