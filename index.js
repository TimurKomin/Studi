// Задание 1
// const arr = [1, 2, 3, 4, 5]
// const w = (arr) => arr.map((item) => item**2 )
// console.log(w(arr))


// Задание 2
// const array = [1, 2, 2, 5, 7, 5, 7, 9, 3, 3, 9]
// function only(arr) {
//     let a = arr.filter((item, index) => arr.indexOf(item) === index);
// return a
// }
// console.log(only(array))


// Задание 3
// const array = [1, -2, 4, 0, -3, 5]
// const positive = (arr) => arr.every((item) => item > 0)
// console.log(positive([1,2,3]))


// Задание 4
// const array = [1, -2, 4, 0, -3, 5]
// const negative = (arr) => arr.filter((item) => item < 0)
// console.log(negative(array))


// Задание 5
// const sumArray = (arr) => arr.reduce((sum, current) => sum + current);
// console.log(sumArray(negative(array)))    


//Задание 6
// const arr = [1, 2, [3, 4], 5, {a: 7}, {}]
// const res = (arr) => arr.filter((item) => Array.isArray(item))
// console.log(res(arr))


//задание 7
// let a = 'Hello world i like JavaScript'
// function longWord(word){
//     let a = word.split(' ')
//     let b = a.filter(item => item.length > 4)
//     return b.length;
// }
// console.log(longWord(a));


// Задание 8
function num(str){
    let x = parseInt(str.replace(/[^\d]/g, ''))
    if(x > 99999) {
        return x
    }else {
        return false
    }
}

