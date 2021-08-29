const randomizer = (gap) => {
    return parseInt(Math.random() * gap)
}

/* big array and big object with numbers*/
var nbOfNbs = 100000

const arrayOfNb = []

for (let i = 0; i<nbOfNbs; i++){
    arrayOfNb.push(randomizer(35000))
}


const objNb = {}

for (let j = 0; j < nbOfNbs; j++){
    objNb[j] = j
}

/* big array and big object with strings*/
var nbOfStrings = 10

const generateString = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    let str = ''

    for (let k = 0; k<randomizer(30); k++){
        str += alphabet.charAt(randomizer(alphabet.length))
    }
    
    return str
}


const arrayOfStrings = []

for (let l = 0; l < nbOfStrings; l++){
    arrayOfStrings.push(generateString())
}

const objectString = {}

for(let m = 0; m < nbOfStrings; m++){
    objectString[m] = generateString()
}
