// Задание 4      //! Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность


// Родительская функция

function Device(name, power) {
    this.name = name
    this.power = power

    this.deviceOn = function() {
        console.log(`${this.name} в работе, мощность: ${this.power} Вт`)
    }
    this.deviceOff = function() {
        console.log(`${this.name} не включен`)
    }
}

// Компьютер

function Computer(name, price, cpu, videoCard, power) {
    this.name = name
    this.price = price
    this.cpu = cpu
    this.videoCard = videoCard
    this.power = power

    this.specifications = function() {
        console.log(`Компютер: ${this.name}, Цена: ${this.price} руб, Процессор: ${this.cpu}, Видеокарта: ${this.videoCard}, Мощность: ${this.power} Вт`)
    }
}

// // Холодильник

function Fridge(name, price, color, power) {
    this.name = name
    this.price = price
    this.color = color
    this.power = power

    this.specifications = function() {
        console.log(`Холодильник: ${this.name}, Цена: ${this.price} руб, Цвет: ${this.color}, Мощность: ${this.power} Вт`)
    }
}


Computer.prototype = new Device()
Fridge.prototype = new Device()

// Экзепляры

const fridge = new Fridge('STINOL STS 185 S', 29990, 'серый', 570)
const computer = new Computer('Lenovo', 99000, 'Ryzen 7', 'Интегрированная', 80)

fridge.specifications()
fridge.deviceOff()
fridge.deviceOn()
computer.specifications()
computer.deviceOff()
computer.deviceOn()