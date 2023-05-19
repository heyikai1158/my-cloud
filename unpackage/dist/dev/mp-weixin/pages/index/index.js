"use strict";
const common_vendor = require("../../common/vendor.js");
const IndexDetail = () => "../../components/index-detail/index-detail.js";
const _sfc_main = {
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
      common_vendor.index.setTabBarStyle({
        backgroundColor: "#fff",
        selectedColor: "#7967fd"
      });
    }
  }
};
if (!Array) {
  const _component_IndexDetail = common_vendor.resolveComponent("IndexDetail");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_component_IndexDetail + _easycom_uni_icons2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.indicatorDots,
    b: $data.autoplay,
    c: $data.interval,
    d: $data.duration,
    e: !$data.showDetail
  }, !$data.showDetail ? {} : {}, {
    f: common_vendor.p({
      type: "upload",
      size: "50"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
