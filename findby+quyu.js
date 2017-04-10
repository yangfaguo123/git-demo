/**
 * Created by faguo on 17-4-9.
 */
var mycars = [4, 5, 7, 15, 10, 56, 25, 44, 35, 40, 55, 78, 90, 60, 75, 88];


function findby(arr, match) {
    for (var i = 0; i < arr.length; i++) {
        if(match(arr[i]))
        console.log(arr[i]);
    }
}
findby(mycars, function (mycar) {
    return mycar % 5 === 0;
});