var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-wrap",style:(_vm.paddingAppTop),attrs:{"id":"app"}},[_c('intro',{attrs:{"height-header":_vm.heightHeader}}),_c('header-bar',{attrs:{"showSeparator":_vm.getAppClass.showSeparator}}),_c('transition',{attrs:{"name":"change-page","mode":"out-in","duration":{leave: 900 }}},[_c('router-view')],1),(!_vm.disableFooter)?_c('footer-bar',{attrs:{"show-contacts":true}}):_vm._e()],1)}
var staticRenderFns = []

export { render, staticRenderFns }