import UiManager from '../ui-manager/ui-manager.js';

class Router {

    routes = [
        {
            path: '/login',
            component: 'login-component'
        },
        {
            path: '/registration',
            component: 'registration-component'
        },
        {
            path: '/dashboard',
            component: 'dashboard-component'
        },
    ];

    entryRoute = '/login'

    constructor() {
        this.initRouter();
    }

    initRouter = () => {
        this.createRouterElement();
        this.readCurrentUrlPath();
        this.enableRouting();
    }

    readCurrentUrlPath = () => {
        this.currentRoute = location.pathname !== '/' ? location.pathname : '/login';
    }

    createRouterElement = () => {
        const routerEl = document.createElement('router');
        document.body.appendChild(routerEl);
    }

    enableRouting = () => {
        this.uiManager = new UiManager();
        this.navigateToCurrentRoute();
    }

    navigateToCurrentRoute = () => {
        this.navigate(this.currentRoute);
        this.onRouteChanged();
    }

    navigateToEntryRoute = () => {
        this.navigate(this.entryRoute);
        this.onRouteChanged();
    }

    onRouteChanged() {
        const currentRouteComponentName = this.getComponentNameForRoute(this.currentRoute);
        this.uiManager.renderComponent(currentRouteComponentName, 'router');
    }

    getComponentNameForRoute = (route) => {
        return this.routes.find(el => el.path === route).component;
    }

    navigate(route) {
        window.history.pushState('', '', `${location.origin}${route}`);
        this.currentRoute = route;
        this.onRouteChanged()
    }

}

export default Router;