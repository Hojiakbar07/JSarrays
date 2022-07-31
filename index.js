let arr = [];

for(i = 0; i <= Infinity; i++) {
    let text = prompt('Введите ваше имя !');
    let order = prompt('Введите команду =)')
if (order == 'add') {
    arr.unshift(text);
}else if (order == 'del') {
    arr.splice(text);
}else if (order == 'stop') {
    break;
}
}

console.log(arr); 

console.log(text);