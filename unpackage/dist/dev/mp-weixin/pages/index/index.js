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
      common_vendor.index.setTabBarStyle({
        backgroundColor: "#fff",
        selectedColor: "#7967fd"
      });
    },
    // 获取上传状态
    select(e) {
      console.log("选择文件：", e);
    },
    // 获取上传进度
    progress(e) {
      console.log("上传进度：", e);
    },
    // 上传成功
    success(e) {
      console.log("上传成功");
    },
    // 上传失败
    fail(e) {
      console.log("上传失败：", e);
    }
  }
};
if (!Array) {
  const _component_IndexDetail = common_vendor.resolveComponent("IndexDetail");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  (_component_IndexDetail + _easycom_uni_file_picker2)();
}
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  _easycom_uni_file_picker();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.indicatorDots,
    b: $data.autoplay,
    c: $data.interval,
    d: $data.duration,
    e: !$data.showDetail
  }, !$data.showDetail ? {} : {}, {
    f: !$data.showDetail
  }, !$data.showDetail ? {
    g: common_vendor.o($options.select),
    h: common_vendor.o($options.progress),
    i: common_vendor.o($options.success),
    j: common_vendor.o($options.fail),
    k: common_vendor.p({
      fileMediatype: "all",
      ["list-styles"]: $data.listStyles
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
