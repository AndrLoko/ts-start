const str: string = 'Hello'
const isFetching: boolean = true

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello TypeScript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13] // [] перет number указывает что это массив
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13] // Дженерик тип 

const words: string[] = ['Hello', 'TypeScript']

// Tuple 
const contact: [string, number] = ['Vladilen', 1234567]

// Any
let variable: any = 42 // "any" Сделать из переменной любой тип данных

variable = 'New String'
variable = []