let bin = prompt('Введите число');

let sum = 0;
for(let i = 0; i < bin.length; i++) {

    sum += +bin[i] * Math.pow(2, bin.length-i-1);
}

console.log(sum);