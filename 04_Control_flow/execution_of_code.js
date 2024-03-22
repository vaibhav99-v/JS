// JavaScript Execution Context 

// +-----+
// | { } | -> Global Execution Context
// +-----+

// There are 2 types of execution

// 1. Global Execution Context -> Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known as the Global Execution Context (GEC)
// 2. Function Execution Context -> FEC or Functional Execution Code is that type of context which is created by the JavaScript engine when any function call is found. Every function has its own execution context, and thus unlike GEC, the FEC can be more than one.
// 3. Eval Execution Context

// How to executed the code?

// +-----+
// | { } | 
// +-----+

// There are three type of phases:

// 1. Memory Creation Phase --> It is also called Creation phase
// 2. Execution Phase -->  In this phase, calculations are done.

// ----------------------------------------------------------
// let val1 = 10
// let val2 = 5
// function addNum(num1,num2){
//     let total = num1 + num2
//     return total
// }

// let result1 = addNum(val1,val2)
// let result2 = addNum(10,3)

// // ----------------------------------------------------------

// Step 1 -> Global Execution and Global Environment

// Global Execution started and it will allocate in 'this' variable. In browser's execution environment, 'this' variable always assigned as window object. 

// Step 2 -> Memory Creation Phase

// In this step, all variables are initially allocated space as undefined.

//   Example -> val1 => undefined
//              val2 => undefined
//              addNum -> function defination
//              result1 -> undefined
//              result2 -> undefined
//     In this example, we can see variables i.e. val1 and val2 initialzes as undefined. And addNum function initialze function defination

// Step 3 => Execution Phase

// All types of algorithm are done in this phase for all variables. And for every function has created new executional context and the resultant value will go to the Global execution context. Once their task is complete it will delete.

//   Example -> val1 <- 10       New Executional Context
//              val2 <- 5       +------------------+
//              addNum -------> |  new variable    |
//                              |   environment    |  
//                              |        +         |
//                              |  Execution       |
//                 <----------- |        thread    |
//                /             +------------------+
//          Memory Phase-------------->  Execution Phase  
//          num1 -> undefined             num1 <- 10
//          num2 -> undefined             num2 <- 5
//          total -> undefined            total <- 15

//             result1 <= 15
//             result2 <= 
// Here all the defined variables will assign their values and for every functions or function call New executional context(Memory phase + Execution phase) will always create and if their task is completed then it will delete from the memory.


// Call Stack: 

// function one(){
//     console.log("one");
// }
// function two() {
//     console.log("two");
// }
// function three(){
//     console.log("three");
// }

// one()
// two()
// three()


//                 |            |
// one             |            |
// two             |            |
// three           +------------+



//                    |            |
//    one             |            |
//    two             |   one      |
//    three           +------------+


//                    |            | 
//                    |            |     one   
//                    |   two      |      
//    three           +------------+


//                    |            | 
//    one             |            |     one   
//    two             |   three    |     two
//    three           +------------+


// function one(){
//     console.log("one");
//     two()
// }
// function two() {
//     console.log("two");
//     three()
// }
// function three(){
//     console.log("three");
// }

// one()
// two()
// three()


//                 |            |
// one             |            |
// two             |            |
// three           +------------+



//                    |            |
//                    |            |
//    two             |   one      |
//    three           +------------+

//                    |            |
//                    |   two      |
//                    |   one      |      
//    three           +------------+

//                    |            |     
//                    |   two      |        
//                    |   one      |      
//                    +------------+


//                    |   three    | 
//                    |   two      |        
//                    |   one      |     
//                    +------------+

                   
//                    |            |   three
//                    |   two      |        
//                    |   one      |     
//                    +------------+


//                    |   three    |   three
//                    |   two      |   two     
//                    |   one      |     
//                    +------------+


                   
//                    |   three    |    one
//                    |   two      |    two    
//                    |   one      |    three 
//                    +------------+