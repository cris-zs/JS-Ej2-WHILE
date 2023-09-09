let identifier = document.getElementById('identifier');
let page = identifier.textContent;

if (page === 'Ejercicio 1'){
    let number = prompt('Ingrese un número');
    let numberCon = Math.trunc(number);
    let i = 0;
    console.log('Los números que son múltiplos de 5 a partir de 0 hasta el número introducido:');
    while (i < numberCon) {
        i++
        if ((i + 1) % 5 === 0) {
            console.log(i + 1);
        }
    }
} else if(page === "Ejercicio 2"){
    let firstNumber = prompt('Ingrese un número entre el 1 y el 50');
    let secondNumber = prompt('Ingrese otro número entre el 1 y el 50');
    let i = 0;
    const counter = 50;
    while(i<counter){
        console.log(i+1);
        if((i+1) == firstNumber){
            console.log(`${firstNumber}: Lotería!`);
        } else if((i+1 == secondNumber)){
            console.log(`${secondNumber}: Lotería!`);
        }
        i++;
    }
} else if(page === "Ejercicio 5"){
    let i = 0;
    while(i == 0){
        let pickedDay = prompt('Elige un dia de la semana');
        let weekday = pickedDay.toLowerCase();
        switch(weekday){
            case 'lunes':
                alert('Principio de semana');
                break;
            case 'martes':
                alert('Ni te cases ni te embarques');
                break;
            case 'miercoles':
                alert('Se casa la patrona');
                break;
            case 'jueves':
                alert('Estoy muy desvelado');
                break;
            case 'viernes':
                alert('Que muere Jesucristo');
                break;
            case 'sabado':
                alert('Trabajo medio día');
                break;
            default:
                alert('Ingrese un dia válido');
                break;
            case 'domingo':
                alert('Vete a descansar');
                i = 1;
        }
    } 
}