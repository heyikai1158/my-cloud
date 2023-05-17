"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
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
      console.log(this.fileUrl);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/user/Documents/HBuilderProjects/my-cloud/components/index-detail/index-detail.vue"]]);
wx.createComponent(Component);
