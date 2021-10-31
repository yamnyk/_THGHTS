class Optional {
  static of(data) {
    return data ? this.transform(data) : this.empty();
  }
  
  static transform(data) {
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
    }
  }
  
  static empty() {
    return [];
  }
}

const o_num = Optional.of(123);
const o_str = Optional.of("gogi");
const o_empty_str = Optional.of("");
const o_obj = Optional.of({name:"Gogi"});
const o_arr = Optional.of(["Gogi", 123]);

console.log('o_num', o_num);
console.log('o_str', o_str);
console.log('o_empty_str', o_empty_str);
console.log('o_obj', o_obj);
console.log('o_arr', o_arr);