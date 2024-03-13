// ========= Basic Types =========
var str1 = 'Hello';
var isFetching = true;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = 'Hello TypeScript';
var numberArray = [1, 1, 2, 3, 5, 8, 13]; // [] перет number указывает что это массив
var numberArray2 = [1, 1, 2, 3, 5, 8, 13]; // Дженерик тип 
var words = ['Hello', 'TypeScript'];
// Tuple 
var contact = ['Vladilen', 1234567]; // Turple - несколько типов в массиве
// Any
var variable = 42; // "any" Сделать из переменной любой тип данных
variable = 'New String';
variable = [];
// ======== Function =========
function sayMyName(name) {
    console.log(name);
}
sayMyName('Хайзенберг');
// Never
function throwError(message) {
    throw new Error(message);
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
