const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('I have succeeded');
    }, 1000)
});

myPromise.then(value => console.log(value));