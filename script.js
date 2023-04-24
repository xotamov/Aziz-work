let texchinc_store = [
    {
        title: "coffee machine",
        price: 2_000_000,
        quality: 7.5,
        garanty: true,
        discound: 20
    },
    {
        title: 'store phone',
        price: 1_100_000,
        guality: 9,
        garunty: true,
        discound: 50,
    },
    {
        title: 'car',
        price: 100_500_000,
        guality: 10,
        garunty: true,
        discound: 40,
    },
    {
        title: 'window',
        price: 1_400_000,
        guality: 7,
        garunty: false,
        discound: 0,
    },
    {
        title: 'table',
        price: 2_100_000,
        guality: 10,
        garunty: true,
        discound: 30,
    }
]


let price = [2_000_000,1_100_000,100_500_000,1_400_000,2_100_000]

console.log(
price.sort((a,b) => a - b)
);


