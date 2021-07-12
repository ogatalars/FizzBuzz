//divisivel por 3 => fizz
//Divisivel por 5 => buzz
//Divisivel por ambos => FizzBuzz
// Não é divisivel por 3 ou 5 => entrada
// Não é um número => não é um numero

// const resultado = fizzBuzz(1);
// console.log(resultado);


// function fizzBuzz(i) { 
//     for(let i=0; i <= 100; i++) {
//         if(i % 3) { 
//             console.log('Fizz')
//         }
//         if(i % 5) { 
//             console.log('Buzz')
//         }
//         if(i % 5 && i % 3) {
//             console.log('FizzBuzz')
//         }
        
//     }


// }

// fizzBuzz()

// for(let i =1; i <= 100; i++) { 
//     if(i % 3 === 0) {
//         console.log('fizz')
//     }
   
//     if(i % 5 === 0) {
//         console.log('Buzz')
//     }
//     if( (i % 3 == 0) && (i % 5 == 0)) {
//         console.log('FizzBuzz');}

//     if( (i % 3 != 0) && (i % 5 != 0)) {
//         console.log('Não é um múltiplo');
//     }

// }

// for (let i = 1; i <= 100; i++) { 
//     if ((i % 3 == 0) && (i % 5 == 0)) {
//         console.log('FizzBuzz');
//     }
//     else if (i % 3 == 0) { 
//         console.log('Fizz');
//     }
//     else if (i % 5 == 0) { 
//         console.log('Buzz')
//     }

//     else { 
//         console.log(i);
//     }
// }

const resultado = fizzBuzz(20);
console.log(resultado);

function fizzBuzz(entrada) { 
    if( typeof entrada !== 'number')
       return 'não é um numero';
    if(entrada % 3 === 0 && entrada % 5 ===0)
       return 'FizzBuzz';   
    if(entrada % 3 ===0) 
       return 'fizz';
    if(entrada % 5 === 0) 
       return 'Buzz'; 
    
    return entrada;   

    
}