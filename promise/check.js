new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done!"), 2000);
}).then(() => console.log("kvdf"));
console.log("d");