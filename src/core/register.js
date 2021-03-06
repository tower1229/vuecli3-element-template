// 全局组件
import BaseHeader from '@/main/components/BaseHeader.vue'

const globalComponents = {
    BaseHeader,
    BaseBreadcrumb: () => import(/* webpackChunkName: "global-components" */ "@/main/components/BaseBreadcrumb.vue"),
    BaseSubNav: () => import(/* webpackChunkName: "global-components" */ "@/main/components/BaseSubNav.vue"),
    BasePagination: () => import(/* webpackChunkName: "global-components" */ "@/main/components/BasePagination.vue"),
    BaseCURD:  () => import(/* webpackChunkName: "global-components" */ "@/main/components/BaseCURD.vue"),
    DictRadio:  () => import(/* webpackChunkName: "global-components" */ "@/main/components/DictRadio.vue"),
    DictCheckbox:  () => import(/* webpackChunkName: "global-components" */ "@/main/components/DictCheckbox.vue"),
    DictSelect:  () => import(/* webpackChunkName: "global-components" */ "@/main/components/DictSelect.vue"),
    DictCascader:  () => import(/* webpackChunkName: "global-components" */ "@/main/components/DictCascader.vue"),
    OrgPicker:  (resolve) => require(["@/system/components/OrgPicker.vue"], resolve),
    TheResourcePicker:  (resolve) => require(["@/system/components/TheResourcePicker.vue"], resolve),
    
}

// 全局过滤器
import { formatDate } from '@/core'

const globalFilters = {
    date: formatDate
}

export default {
    install: function (Vue) {
        // 注册过滤器
        Object.keys(globalFilters).forEach(key => {
            Vue.filter(key, globalFilters[key])
        })

        // 注册组件
        Object.keys(globalComponents).forEach(key => {
            Vue.component(key, globalComponents[key])
        })

        // v-auth 指令（用于权限控制）
        Vue.directive('auth', {
            inserted: function (el, binding) {
                if (Vue.prototype.$_auth && !Vue.prototype.$_auth(binding.value)) {
                    el.parentNode.removeChild(el);
                }
            }
        });

    }
}