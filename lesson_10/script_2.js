const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getEnevNumbers(arr) {

    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArray.push(arr[i]);
        };
    };
    return newArray;    
};

const even = getEnevNumbers(arr);
console.log(even);