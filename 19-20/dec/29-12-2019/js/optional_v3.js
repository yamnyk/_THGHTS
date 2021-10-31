function Optional(data) {
  this.value = ["object", "number", "string", "boolean", "symbol"]
    .filter(el => data !== "" && el === typeof data)
    .map(i => data);
}

const o_num = new Optional(123);
const o_zero = new Optional(0);
const o_str = new Optional("gogi");
const o_empty_str = new Optional("");
const o_bool = new Optional(false);
const o_symbol = new Optional(Symbol('gogi'));
const o_obj = new Optional({name: "Gogi"});
const o_arr = new Optional(["Gogi", 123]);
const o_undefined = new Optional(undefined);
const o_null = new Optional(null); //doesn't work correctly

console.log('o_num', o_num);
console.log('o_zero', o_zero);
console.log('o_str', o_str);
console.log('o_empty_str', o_empty_str);
console.log('o_bool', o_bool);
console.log('o_symbol', o_symbol);
console.log('o_obj', o_obj);
console.log('o_arr', o_arr);
console.log('o_undefined', o_undefined);
console.log('o_null', o_null);