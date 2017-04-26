/**
 * Created by faguo on 17-4-25.
 */
function reduce(a, f, m) {
    var s = m;
    for (var i = 0; i < a.length; i++) {
        s = f(s, a[i]);
    }
    return s;
}
var b = [1, 2, 3, 5, 6, 7, 8, 9];
var result = reduce(b, (x, y) => x * y, 1);
var result1 = reduce(b, (x, y) => x + y, 0);
console.log(result);
console.log(result1);