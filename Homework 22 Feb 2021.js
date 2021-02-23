// Watch and Code Homework 22nd Feb 2021
// Assignment: https://gist.github.com/gordonmzhu/446d1dc92fca278ffa89df4d8215bd89

// My solutions:

// Sequence: 1, 4, 7, 10, 13, 16 ...
// 1st element: 1
// ith element: previous element + 3
// Example: 4th element = 7 + 3 = 10

// Recursive
function getIthElement(i) {
  if (i === 1) { // base case of recursive function, i.e. runs when the function doesn't call itself anymore
    return 1;
  } else { // recursive case, i.e. what will keep happening if the base case has not yet been reached
    return getIthElement(i - 1) + 3; // Funktion ruft sich selbst auf.
  }
}

// Zum Üben: Funktion mit drei verschiedenen i durchgehen
// i = 1
function getIthElement(i) { // i = 1 // i = 2 // i = 3
  if (i === 1) { 
    return 1; // returns 1
  } else { 
    return getIthElement(i - 1) + 3; // return getIthElement(i = 1) + 3; --> returns 4 // return getIthElement(i = 2) + 3; --> returns 7
  }
}

// Count the lines of code that will run for a given input (minus the lines with debugger and console.log)
// The final counter logged by the function is the number of lines of code that run.

var counter = 0;

function getIthElement(i) {
  //debugger;
  if (i === 1) { 
    console.log('counter: ', counter += 2); // in the base case, 2 lines of code run
    return 1;
  } else { 
    console.log('counter: ', counter += 2); // in the recursive case, 2 lines of code run.
    return getIthElement(i - 1) + 3; 
  }
}


// For each approach, count the number of lines of code that will run for the following inputs:
// i.e. the lines of code inside the function where the debugger pauses (no matter how many times per line)
// pausing on the debugger statement doesn't count.
// reset counter before calling function again!

// - i = 1 
  // expectation: 2 lines. 10%. 
  // reality: 2 lines. 100%
// - i = 10 
  // expectation: 3 + 3 .. 30. 1%. 
  // reality: 2 x 10 lines = 20 lines. 100%
// - i = 100 
  // expectation: 200 lines. 
  // reality: 200 lines. 100%
// - i = 1.000 
  // expectation: 2.000 lines. 
  // reality: 2.000 lines. 100%
// - i = 10.000 
  // expectation:  20.000 lines 
  // reality: Uncaught RangeError: Maximum call stack size exceeded
// - i = 100.000 
  // expectation: 200.000 lines 
  // reality: didn't try.


// Iterative

function getIthElementIterative(i) {
  // debugger;
  var result = 1; // 1 ist unser Startpunkt, zu dem wir 3 dazuzählen müssen, um zum nächsten Element der Folge zu gelangen.
  var counter = 1; // weil die erste und letzte Zeile sowieso laufen.

  for (var j = 1; j < i; j++) { // j = Anzahl der Durchgänge durch die Loop?/Anzahl der Elemente, die zur Folge hinzgefüht werden? Läuft, solange j kleiner als i ist.
    result += 3; // In jedem Durchgang wird 3 zum vorigen Ergebnis dazugezählt.
    counter += 2; // 2 Zeilen pro Durchgang durch Loop, außer beim letzten
  }

  counter += 2; // 1 x Überprüfen der Bedingung in der for-loop, 1 x Ausgeben des Resultats.
  console.log('counter:', counter);
  return result; // Gibt das Ergebnis aus.
}

// For each approach, count the number of lines of code that will run for the following inputs:
// ERGIBT SICH EIN MUSTER?

// - i = 1.
  // Erwartung: 3 Zeilen. d.h. 1. Zeile, 1 Zeile Loop, letzte Zeile. 
  // Realität: 3 Zeilen.
// - i = 10. 
  // Erwartung: 1. Zeile + (j - 1) Runden x 2 Zeilen + 1x letzte Zeile = 20 Zeilen. 
  // Realität: 1x erste Zeile + (i x 2 Zeilen - 1) + 1x letzte Zeile = 21 Zeilen. 
// - i = 100. 
  // Erwartung:  1. Zeile + (j - 1) Runden x 2 Zeilen + 1x letzte Zeile = 200 Zeilen. 
  // Realität: 1x erste Zeile + (i x 2 Zeilen - 1) + 1x letzte Zeile = 201 Zeilen.
// - i = 1.000.
  // Erwartung: 2.000 Zeilen. 
  // Realität: 1x erste Zeile + (i x 2 Zeilen - 1) + 1x letzte Zeile = 2001 Zeilen.
// - i = 10.000. 
  // Erwartung: 20.000 Zeilen. 
  // Realität: 1x erste Zeile + (i x 2 Zeilen - 1) + 1x letzte Zeile =  20.001 Zeilen.
// - i = 100.000. 
  // Erwartung: 200.000 Zeilen. 
  // Realität: 1x erste Zeile + (i x 2 Zeilen - 1) + 1x letzte Zeile =  200.001 Zeilen.

// Formulaic
function getIthElementFormulaic(i) {
  debugger;
  return (1 + 3*(i - 1)); // wenn wir das erste Element als i = 0 zählen würden, wäre die Formel: 1 + 3i. Da wir aber von i = 1 an zählen, ist sie: 1 + 3(i - 1).
}


// For each approach, count the number of lines of code that will run for the following inputs:

// - i = 1
  // Erwartung: Anzahl der Zeilen ist gleich i. 
  // Realität: 1 Zeile.
// - i = 10
  // Erwartung: Anzahl der Zeilen ist gleich i. 
  // Realität: 1 Zeile.
// - i = 100
  // Erwartung: Anzahl der Zeilen ist gleich i. 
  // Realität: 1 Zeile.
// - i = 1000
  // Erwartung: Anzahl der Zeilen ist gleich i. 
  // Realität: 1 Zeile.
// - i = 10000
  // Erwartung: Anzahl der Zeilen ist gleich i. 
  // Realität: 1 Zeile.
// - i = 100000  
  // Erwartung: Anzahl der Zeilen ist gleich i. 
  // Realität: 1 Zeile.
