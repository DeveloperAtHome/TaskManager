const fs = require('fs');
const templates = {};

const components = fs.readdirSync('./src/components');
components.forEach(component => {
  componentTemplate = fs.readFileSync(`./src/components/${component}/${component}.html`).toString();
  templates[component] = componentTemplate;
});

var stream = fs.createWriteStream("./src/component-template-register.js");
stream.once('open', () => {
  stream.write(`const componentTemplateRegister = ${JSON.stringify(templates)}\n`);
  stream.write('export default componentTemplateRegister');
  stream.end()
})