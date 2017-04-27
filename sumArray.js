/**
 * Created by faguo on 17-4-26.
 */
"use strict";
function sumArray(list) {
    var s = 0;
    for (var i = 0; i < list.length; i++) {
        s = s + list[i];
    }
    return s;
}
var b = sumArray([1, 2, 3, 4, 5, 6]);
console.log(b);
