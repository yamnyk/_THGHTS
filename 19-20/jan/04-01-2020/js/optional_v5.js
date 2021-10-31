function Optional(...data) {
  this.value = data.filter((el, index, array) => {
    let answer = false;
    /**
     * check for any NaN
     * symbol can't be converted to number, so isNaN doesn't fit 
     */
  });
  
  data = data.filter(el => ![undefined, null].some(d => d === el));
  
  this.value = data.filter(d => (
    ["object", "number", "string", "boolean", "symbol"]
      .some(t => t === typeof d)
  ))
}

/**
 * not working with NaN
 */
const o_arr_values = new Optional(NaN, 123, 3, '', true, undefined, 0, null, {name: 'Gogi'}, [undefined, null, 123]);
const o_num = new Optional(123);
const o_zero = new Optional(0);
const o_str = new Optional("gogi");
const o_empty_str = new Optional("");
const o_bool = new Optional(false);
const o_symbol = new Optional(Symbol('gogi'));
const o_obj = new Optional({name: "Gogi"});
const o_arr = new Optional(["Gogi", 123]);
const o_undefined = new Optional(undefined);
const o_null = new Optional(null);

console.log('o_num - ', o_num);
console.log('o_zero - ', o_zero);
console.log('o_str - ', o_str);
console.log('o_empty_str - ', o_empty_str);
console.log('o_bool - ', o_bool);
console.log('o_symbol - ', o_symbol);
console.log('o_obj - ', o_obj);
console.log('o_arr - ', o_arr);
console.log('o_undefined - ', o_undefined);
console.log('o_null - ', o_null);
console.log('o_arr_values - ', o_arr_values);