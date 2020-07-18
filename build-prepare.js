const fs = require('fs');
const templates = [];

// fs.readdir('./src/components', (err, items) => {
//   if (!err) {
//     items.forEach(dir => {
//       fs.readdir('./src/components/' + dir, (err, items) => {
//         if (!err) {
//           console.log('Sub dirs of ' + dir + ': ' + items);
//           const templateFileName = items[0];
//           const templateString = fs.readFileSync('./src/components/' + dir + '/' + templateFileName).toString();
//           templates.push({
//             componentName: dir,
//             template: templateString
//           })
//         } else {
//           console.log(err);
//         }
//       });
//     })
//   } else {
//     console.log(err);
//   }
// });

