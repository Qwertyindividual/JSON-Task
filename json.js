Cars = {

}

fetch('index.json').then(function (response) {
    return response.json();
}).then(function (obj) {
     document.write(obj);
}).catch(function (error) {
alert (
    "Somethig went wrong with retrieving index"
);
console.error(error);
})


