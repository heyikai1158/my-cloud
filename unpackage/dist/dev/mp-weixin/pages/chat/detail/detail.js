"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  onLoad(options) {
    console.log(options.userid);
  },
  onShow() {
    this.updateHeaderStyle();
  },
  methods: {
    updateHeaderStyle() {
      common_vendor.index.setNavigationBarColor({
        frontColor: "#ffffff",
        backgroundColor: "#171425"
      });
    },
    addTest() {
      console.log("动态添加信息");
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "paperclip",
      size: "30",
      color: "#fff"
    }),
    b: common_vendor.o($options.addTest),
    c: common_vendor.p({
      type: "paperplane",
      size: "30",
      color: "#fff"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/pages/chat/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
