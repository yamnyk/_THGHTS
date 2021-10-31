const stage1 = ['a', 'b', 'c', 'd', 'e'];
const stage2 = ['a', 'b', 'c', 'd', 'e'];
const stage3 = ['a', 'b', 'c', 'd', 'e'];

const res = [];

/**
 * The task is to have all combinations of elements in all 3 arrays
 */
stage1.forEach(l1 => {
  stage2.forEach(l2 => {
    stage3.forEach(l3 => {
      res.push(l1 + l2 + l3);
    });
  });
});

console.log(res);