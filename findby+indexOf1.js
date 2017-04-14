/**
 * Created by faguo on 17-4-11.
 */

var products = [
    {
        name: 'BBBSCCS',
        price: 121,
        count: 12
    },
    {
        name: 'BBBSABCCCS',
        price: 121,
        count: 12
    }
    ,
      {
        name: 'BBBSABADCCS',
        price: 121,
        count: 12
    }
    ,
    {
        name: 'BBBABCSCCS',
        price: 121,
        count: 12
    }
    ,
    {
        name: 'BBBABGH',
        price: 121,
        count: 12
    }
    ,
    {
        name: 'BBBABC',
        price: 121,
        count: 12
    },
    {
        name: 'BBBABD',
        price: 121,
        count: 12
    }
];
function findby(arr, match) {
    for (var i = 0; i < arr.length; i++) {
        if (match(arr[i])) {
            console.log(arr[i]);
        }

    }
    return undefined;
}


findby(products, function (product) {
    return product.name.indexOf("ABC") >= 0;
});

