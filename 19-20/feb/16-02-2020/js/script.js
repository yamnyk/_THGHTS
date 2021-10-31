const template = document.getElementById('modal');
const node = document.importNode(template.content, true);

document.querySelector('script').before(node);

// document.querySelector('script').before(
//   document.importNode(
//     document.getElementById('alertBtn').content,
//     true
//   )
// );

document.querySelector('script').before(
  document.importNode(
    document.getElementById('oneDialog').content,
    true
  )
);