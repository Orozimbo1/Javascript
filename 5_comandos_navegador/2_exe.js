let varA = "A";
let varB = "B";
let varC = "C";

// Fazer com que varA tenha o valor de varB, varB tenha o valor de varC e varA tenha o valor de varC

// Jeito antigo de resolver
let oldVarA = varA
varA = varB
varB = varC
varC = oldVarA

console.log(varA, varB, varC)

// Jeito moderno de resolver

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)