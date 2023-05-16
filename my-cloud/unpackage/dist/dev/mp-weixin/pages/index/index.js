"use strict";
const common_vendor = require("../../common/vendor.js");
const IndexDetail = () => "../../components/index-detail/index-detail.js";
const _sfc_main = {
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 5e3,
      duration: 500
    };
  },
  components: {
    IndexDetail
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _component_IndexDetail = common_vendor.resolveComponent("IndexDetail");
  _component_IndexDetail();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.indicatorDots,
    b: $data.autoplay,
    c: $data.interval,
    d: $data.duration
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
