// Задание 1           //! Функция, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения 
//                     //! Данная функция не должна возвращать значения

const myLaptor = {
    brand: 'Lenovo',
    processor: 'Ryzen 7',
    price: 100000
}
function argObj(object) {
    for(let key in object){
        if (object.hasOwnProperty(key)) {
            console.log(`${key}`)
        }
    }
}

argObj(myLaptor)


//! со значением

const myLaptor2 = {
    brand: 'Lenovo',
    processor: 'Ryzen 7',
    price: 100000
}

function argObj2(object) {
  for (let [key, value] of Object.entries(object)) {
    console.log(`${key}: ${value}`);
  }
}

argObj2(myLaptor2)

// Задание 2          //! функция, которая принимает в качестве аргументов строку и объект, проверяет есть ли у переданного объекта свойство с данным именем


const laptor = {
    brand: 'Lenovo',
    processor: 'Ryzen 7',
    price: 100000
}

function keyObj(string, object) {
    let checkStr = false
    for(let key in object) {
        if (object.hasOwnProperty(key)) {
            if (key == string) {
                checkStr = true 
            }
        }
    }
    console.log(checkStr)
}

title = prompt('Введите ключ')
keyObj(title, laptor)


// Задание 3             //! Функция, которая создает пустой объект, без прототипа


function funcEmptyObj() {
    let emptyObj = Object.create(null)
    return emptyObj
}

console.log(funcEmptyObj)