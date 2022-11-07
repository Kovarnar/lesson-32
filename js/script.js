// Мінімум

// 1. Напиши всі можливі варіанти створення функцій.
function name_1 () {
    console.log('function Declaration')
}
name_1();

let name_2 = function () {
    console.log('function Expression')
}
name_2();

let name_3 = name_3 => console.log('Arrow function');
name_3();

(function () {
    console.log('самовикликаюча функція')
})();

let name_5 = new Function('x','return x');
console.log(name_5('new Function'));

// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
let sumArgs = function() {
    return arguments.length;
}
console.log(sumArgs('j', 'j', 'kk', 'bvb', 4444, 'jh'));

// 3. Напиши функцію, яка приймає 2 числа і повертає :
    // -1, якщо перше число менше, ніж друге; 
    // 1 - якщо перше число більше, ніж друге; 
    // 0 - якщо числа рівні.
let compareNumbers = (a, b) => (a < b) ? -1 : (a > b) ? 1 : 0;
console.log(compareNumbers(4, 5));

// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
let calcFactorial = function(n) {
    let res = 1;
    if (typeof n !== "number" || isNaN(n) || (n < 0) || (n > 170) ) return 'Введіть виключно числа'; 
    for (i = 1; i <= n; i++) res *= i;
    return res;
}
console.log(calcFactorial(5));

// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.
let getNumber = function(x, y, z) {
    let res = '';
    for (let i = 0; i < 3; i++) {
        if ((typeof arguments[i]) !== "number" || isNaN(arguments[i]) || arguments[i] < 0) {
            return 'Введіть виключно додатні числа';
        } else res += arguments[i];
    }
    return +res;
}
console.log(getNumber(1, 4, 9));

// 6.Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function calcArea (x, y) {
    for (let i = 0; i < 2; i++) {
        if ((typeof arguments[i]) !== "number" || isNaN(arguments[i]) || arguments[i] < 0) {
            return 'Введіть виключно додатні числа';
        }
    }
    return x * y;
}
console.log(calcArea(5, 4));


// Норма

// 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
function isPerfect (x) {
    let sum = 0;
    if (typeof x !== "number" || isNaN(x) || x < 0) {
        return 'Введіть виключно додатні числа';
    }
    for (let i = 1; i < x; i++) {
        if (x % i == 0) sum += i; 
    }
    // return (sum === x) ? `${x} досконалe число` : `${x} звичайне число`;
    return (sum === x) ? true : false;
}
console.log(isPerfect(6));

/// 2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, 
// і виводить тільки ті числа з діапазону, які є досконалими. 
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
function getPerfect (a, b) {
    let perfectNumbers = '';
    let result = '';
    if (a < b) {
        for (j = a; j <= b; j++) {
            if (isPerfect(j)) perfectNumbers += j + '  ';
        }
    } 
    else if (a > b) {
        for (j = b; j <= a; j++) {
            if (isPerfect(j)) perfectNumbers += j + '  '; 
        }
    } 
    else {
        return result =  (isPerfect(a)) ? a : 'вiдсутнi';
    } 
    return result = (perfectNumbers.length === 0) ? 'вiдсутнi' : perfectNumbers;
}
console.log(getPerfect(1, 10000));