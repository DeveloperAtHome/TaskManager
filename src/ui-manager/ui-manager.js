import componentTemplateRegister from '../component-template-register.js';
import * as componentClassRegister from '../component-class-register.js';

class UiManager {


    renderComponent = async (componentName, parent) => {
        const template = await this.getComponentTemplate(componentName);
        const parentEl = document.getElementsByTagName(parent)[0];
        if (parentEl) {
            parentEl.innerHTML = template;
        } else {
            console.log('Parent element: ', parent, 'not exist.');
        }
        const componentClass = this.getComponentClass(componentName);
        new componentClass();
    }

    getComponentTemplate = (componentName) => {
        return componentTemplateRegister[componentName];
    }

    getComponentClass = (componentName) => {
        return componentClassRegister.classRegister[componentName];
    }

}

export default UiManager;