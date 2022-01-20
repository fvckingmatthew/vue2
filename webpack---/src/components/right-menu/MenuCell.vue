var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"menu-cell",class:[{'selected': this.$route.path === _vm.path}],on:{"mouseover":function($event){return _vm.$emit('mouseover')},"mouseout":function($event){return _vm.$emit('mouseout')},"click":function($event){[_vm.changePage(_vm.path)],[_vm.$emit('click')]}}},[_vm._t("default")],2)}
var staticRenderFns = []

export { render, staticRenderFns }