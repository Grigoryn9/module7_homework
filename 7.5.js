// Задание 5        //!  Переписать задание 4 на классы

class Device{
    constructor(name, power){
    this.name = name
    this.power = power
}
        deviceOn() {
            console.log(`${this.name} в работе, мощность: ${this.power} Вт`)
        }
        deviceOff() {
            console.log(`${this.name} не включен`)
        }
}

class Computer extends Device{
    constructor (name, price, cpu, videoCard, power) {
        super (name, power)
        this.price = price
        this.cpu = cpu
        this.videoCard = videoCard
    }
        specifications() {
            console.log(`Компютер: ${this.name}, Цена: ${this.price} руб, Процессор: ${this.cpu}, Видеокарта: ${this.videoCard}, Мощность: ${this.power} Вт`)
        }
}

class Fridge extends Device{
    constructor (name, price, color, power) {
        super (name, power)
        this.price = price
        this.color = color
    }
        specifications() {
            console.log(`Холодильник: ${this.name}, Цена: ${this.price} руб, Цвет: ${this.color}, Мощность: ${this.power} Вт`)
        }
}

const fridge = new Fridge('STINOL STS 185 S', 29990, 'серый', 570)
const computer = new Computer('Lenovo', 99000, 'Ryzen 7', 'Интегрированная', 80)

fridge.specifications()
fridge.deviceOff()
fridge.deviceOn()
computer.specifications()
computer.deviceOff()
computer.deviceOn()