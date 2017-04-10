/**
 * Created by faguo on 17-4-8.
 */


var mycars = [6, 15, 4, 25, 7, 35, 55, 44, 5, 75, 87, 85, 90, 20];


function findby(mycars, match) {
    for (var i = 0; i < mycars.length; i++) {
        if (match(mycars[i])) {
            console.log(mycars[i]);
        }
    }
    return undefined;
}
findby(mycars, function (mycar) {
    return mycar % 5 === 0;
});
