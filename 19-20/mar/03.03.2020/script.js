const a = {
  val: 0,
  valueOf: function trick () {
    return ++this.val
  }
};

if (a == 1 && a == 2 && a == 3) {
  console.log('you did this!');
}