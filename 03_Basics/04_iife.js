// Immediate Invoked Function Expressi0on (IIFE)

// function printMsg() {
//     console.log("DB Connected");
// }

// printMsg();


(function printMsg() {
    // Named IIFE
    console.log("DB Connected");
}) ();                                   // IIFE

(() => {
    // Simple IIFE
    console.log("DB Connected Two");
}) ()


