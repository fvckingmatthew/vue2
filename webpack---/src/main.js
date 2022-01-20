import Vue from 'vue'
import store from './store/index'
import Router from 'vue-router'
import App from './App.vue'
import VueYandexMetrika from 'vue-yandex-metrika'
import ProjectPage from "./components/pages/projects_page/ProjectPage";
import MainPage from "./components/pages/main_page/MainPage";
import ProjectDetailedPage from "./components/pages/projects_page/project_detailed_page/ProjectDetailedPage";
import WorksPage from "./components/pages/works_page/WorksPage";
import WorksDetailedPage from "./components/pages/works_page/works_detailed_page/WorksDetailedPage";
import PricePage from "./components/pages/price_page/PricePage";
import ServiceDetailedPage from "./components/pages/service_page/ServiceDetailedPage";
import ContactsPage from "./components/pages/contacts_page/ContactsPage";
import BlogPage from "./components/pages/blog_page/BlogPage";
import FavouritesPage from "./components/pages/favourites_page/FavouritesPage";
import CompanyPage from "./components/pages/company_page/CompanyPage";
import BlogDetailedPage from "./components/pages/blog_page/blog_detailed_page/BlogDetailedPage";
import PartnerDetail from "./components/pages/partners/PartnerDetail";
import NotFound from './components/NotFound';
import PrivacyPolicyPage from './components/pages/privacy_policy/PrivacyPolicyPage';
import './assets/scss/tamplate.css'
import './assets/scss/grid.css'
Vue.use(Router, store);
Vue.config.productionTip = false;




const mapSite = { // все ссылки, которые будут использоваться для меню и маршрутизатора
    main: {
        path: '/',
        component: MainPage,
        name: 'Главная'
    },
    projects: {
        path: '/projects/',
        component: ProjectPage,
        name: 'Проекты',
        meta: {
            title: "Проекты",
            keywords: "тестовые проекты"
        }
    },
    projectDetailed: {
        path: '/projects/:code',
        component: ProjectDetailedPage,
        name: 'detail_project'
    },
    works: {
        path: '/works/',
        component: WorksPage,
        name: 'Наши работы'
    },
    worksDetailed: {
        path: '/works/:code',
        component: WorksDetailedPage,
        name: 'detail_work'
    },
    price: {
        path: '/price/',
        component: PricePage,
        name: 'Цены'
    },
    contacts: {
        path: '/contacts/',
        component: ContactsPage,
        name: 'Контакты'
    },
    blog: {
        path: '/blog/',
        component: BlogPage,
        name: 'Блог'
    },
    blogDetailed: {
        path: '/blog/:code',
        component: BlogDetailedPage,
        name: 'detail_blog'
    },
    favourites: {
        path: '/favourites/',
        component: FavouritesPage,
        name: 'Избранное'
    },
    privacyPolicy: {
        path: '/privacy-policy',
        component: PrivacyPolicyPage,
        name: 'Политика конфиденциальности'
    },
    partnerDetail: {
        path: '/partners/:code',
        component: PartnerDetail,
        name: 'Партнеры'
    },
    partnerRed: {
        path: '/partners/',
        redirect: '/#PartnerMainPage',
        component: MainPage
    },
    company: {
        path: '/company/',
        component: CompanyPage,
        name: 'О нас'
    },
    service: {
        path: '/services/:code',
        component: ServiceDetailedPage,
        name: 'Услуги',
        idBlock: 11
    },
    // serviceMain: {path: '/services/', redirect: '/#ServiceMainPage', component: MainPage},

    error: {
        path: '*',
        component: NotFound,
        name: '404'
    },
};

Vue.prototype.$topMenu = [ // ссылки для меню в шапке
    mapSite.projects,
    mapSite.works,
    mapSite.service,
    mapSite.price,
    mapSite.company,
    mapSite.contacts,
];


let routes = []; // ссылки для маршрутизатора SPA
let i = 0;
for (let optionRoutes in mapSite) {
    routes[i++] = mapSite[optionRoutes];
}


/*export const statusResponseAxios = {
    computed: {
        getProgressAxios(){
            return store.getters.getProgressAxios.statusResponseAxios; // чекаем статус загузки контента
        },
    },
}

let axiosStatus = statusResponseAxios.computed.getProgressAxios();
console.log(axiosStatus)*/

const router = new Router({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(savedPosition)
                }, 1000)
            })
        }
    }
});

Vue.use(VueYandexMetrika, {
    id: 40301710,
    router: router,
    env: "production",
    options: {
        webvisor: true,
        clickmap: true,
    }
})


Vue.prototype.$hostname = 'https://doma-veka.ru'; // домен сайта для bitrix ссылок реактивной версии Vue.js
const site_dir = document.location.protocol + '//' + document.location.host;
if (site_dir === Vue.prototype.$hostname) { // если мы используем build версию на боевом сайте
    Vue.prototype.$hostname = ''; // переменную оставляем пустой
}


new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')