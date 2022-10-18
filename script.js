console.log('Задание - "а"');
console.log('');
console.log('');


const data = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', '2000'];

let [name, surname, department, position, salary] = data
console.log(name + ' -', surname + ';', department + ' -', position + '.', 'c ' + salary + ' года');

console.log('');
console.log('');



console.log('Задание - "b"');
console.log('');
console.log('');

const data2 = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', '2000'];

let [emp0, emp1, emp2, emp3, emp4] = data2
console.log(emp0 + ' -', emp1 + ';', emp2 + '.');

console.log('');
console.log('');
console.log('Задание - "c"');
console.log('');
console.log('');


const data3 = ['Иван', 'Иванов', 'Отдел разработки'];

let [info0, info1, info2] = data3

let info3;
if(info3 !== undefined) {
    info3 = info3
}else {
    info3 = 'Senior Junior'
}


console.log(info0 + ' -', info1 + ';', info2 + ' -', info3 + '.');


console.log('');
console.log('');
console.log('Задание - "d"');
console.log('');
console.log('');


const data4 = {
    color: 'red',
    width: 400,
    height: 500
}

const {color, width, height} = data4
console.log(color, width, height);
