Node.js --> https://www.nodejs.org

1. The Node.js Runtime --> Node.js Command Prompt aka CLI
   1. The "npm" utility
      1. Used to install Project Dependencies
2. The Node.js Framework --> Server-Side Programming
3. The Node.js Host --> To host application
   VS Code --> https://code.visualstudio.com

TypeScript Project Configuration
The package.json

1. Each Front-End app is "pcakage" by default
2. package.json defines
   1. Runtime dependencies for the application
      1. The "npm install -g <PACKAGE-NAME>"
         1. The "dependencies:{}"
   2. Developer time dependencies for the application
      1. The "npm install --save-dev <PACLKAGE-NAME>"
         1. The "devDependencies:{}"
   3. The "npm init -y" command to create a package.json with defaults settings
   4. The "npm init" command to create package.json using Commans-Line Wizard
3. TypeScript
   1. The npm install -g typescript
   2. The TypeScript will be installed in Global Scope and it provides
      1. The "tsc" tool
         1. This is the Compilar (aka transpiler), transpile .ts into .js
   3. The npm install --save-dev typescript 1. install TypeScript for current workspace and will provide developer's intellisense
      #===============================================================================================

TypeScript Development

- TypeScript Configuration File --> tsconfoig.json
- contains rules for Development/Compilation
- The "tsc init" command to create tsconfig.json

0. Local Scope Declaration
   1. Use the 'let' keyword to declare the function scope
1. DataTypes
   1. number
      1. integer
      2. float
   2. string
   3. boolean
   4. Date
   5. Object
   6. Union-Types
   7. Tuples
   8. Array
      1. The Type and itself is a complex class, so it has methods
         1. ES 3 methods
            1. push(),pop(),sort(), etc
         2. ES 6 methods
            1. filter(), replace(), forEach(), map()
      2. Array needs an "Iterator"
         1. for loop --> DOM/DOM2/ES3/ES5/ES6
         2. for..in loop --> indexed based looping from ES3+
         3. symbol.iterator --> Iterate over collection and return item at each position(index)
            1. for..of loop --> Internally works forEach() method
1. Template String
   1. An immutable string object which will parse its contents as HTML parsed string.
   2. Syntax
      1. `ssss${placeholder}ssss${ph2}`
1. Arrow Function

   1. If methods accepts callback function as input parameter, then we can use "Arrow Function" as input parameter to function

============================================================================================================================================================

2. Object Oriented Programming
   1. Class
      1. Constructor
         1. The "constructor()" is a standard method represents constructor of class.
         2. 3 Types of Parameterized Ctors
            1. Ctor parameters scoped to ctor (default)
            2. Ctor parameters with "private" access specifier scoped to class
            3. Ctor parameters with "public" access specifier, scoped to class and out-side of class as public members
         3. All members of class are accessed using 'this' object within the class. (mandatory)
      2. Access Specifier
         1. public (default to all members of class)
         2. private
         3. protected
      3. Access Modifier
         1. static TS 2.5+
         2. async TS 2.8+ --> applied on method
         3. await TS 2.8+ --> applied on statement in-side method for async class
      4. Methods
         1. Do not use "function" keyword for declaration
         2. Must specify return type even it is "void"
      5. Properties
         1. set/get
      6. Using 'rest parameters' for defining method with variable number of parameters
         1. syntax
         2. calculate(...data:<datatype>[]){}
            1. ... are called as 'spread operator' in ES6
            2. internally ... are Object.assign({},obj)
               1. {} blank object in which 'obj' will be 'deep copied'
               2. ...data:number[]
                  1. Object.assign({},data)
            3. ... rest parameters are processed as 'arguments' array internally bnu JavaScript (ES3)
   2. Inheritance
      1. Uses 'extends' keyword for derivation
   3. Generics
      1. The Template for Type creation in TypeScript
      2. Generics class, method, property, member
   4. No-Overloading instead use "rest parameters"
   5. No-Overriding
3. Integration with third party libs
4. Promise
5. Modules
