class Optional {
  constructor(data) {
    const transform = (data) => {
      function handler_arr(data) {
        return [...data];
      }
      function handler_obj(data) {
        return [{...data}];
      }
      function handler_primitive(data) {
        return [data];
      }
      
      switch (typeof data) {
        case "object":
          return data instanceof Array ? handler_arr(data) : handler_obj(data);
        case "number":
          return handler_primitive(data);
        case "string":
          return handler_primitive(data);
        default:
          return empty();
      }
    };
    
    const of = (data) => {
      return transform(data);
    };
    
    const empty = () => {
      return [];
    };
    
    this.value = of(data);
  }
}

const o_num = new Optional(123);
const o_str = new Optional("gogi");
const o_empty_str = new Optional("");
const o_obj = new Optional({name: "Gogi"});
const o_arr = new Optional(["Gogi", 123]);

console.log('o_num', o_num);
console.log('o_str', o_str);
console.log('o_empty_str', o_empty_str);
console.log('o_obj', o_obj);
console.log('o_arr', o_arr);