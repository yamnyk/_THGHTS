/**
 * remember first type and restrict others
 */

function Typable(val) {
  const type = this.getTypeName(val);

  let value = this.checkType(val, type);

  Object.defineProperty(this, "value", {
    get: () => value,
    set: (newVal) => (value = this.checkType(newVal, type)),
  });
}

Typable.prototype.getTypeName = function (v) {
  let type = typeof v;

  if (type === "object") {
    if (v === null) {
      type = "null";
    } else if (Array.isArray(v)) {
      type = "array";
    }
  }

  return type;
};

Typable.prototype.checkType = function (v, t) {
  const linkTypes = ["object", "array", "function"];

  if (this.getTypeName(v) === t)
    return linkTypes.some((type) => type === t) ? Object.freeze(v) : v;

  throw new TypeError("wrong value type");
};

Typable.prototype.toString = function () {
  return JSON.stringify(this.value);
};

Typable.prototype.valueOf = function () {
  return this.value;
};

const gogi = new Typable({ age: 2 });
gogi.value.age = 10;
console.log(gogi.value.age * " 34");
