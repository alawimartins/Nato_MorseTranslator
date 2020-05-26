const form = document.getElementById('form')
let ismorse = false

function divContainerLetter (){
   const divContainerLine = document.createElement('div')
   divContainerLine.className = 'letterLine'
   return divContainerLine
}

function removeElement() {
    // Removes an element from the document.
    var element = document.getElementById('blocks');
    element.innerHTML = ''
}

    
document.getElementById('my-select').addEventListener('change', function() {
    ismorse = !ismorse;
    console.log(ismorse)
});
    

const morse = {
       'A': '.-', 
       'B': '-...',
       'C': '-.-.',
       'D': '-..' ,
       'E': '.'  ,
       'F': '..-.',
       'G': '--.' ,
       'H': '....',
       'I': '..' ,
       'J': '.---',
       'K': '-.-' ,
       'L': '.-..',
       'M': '--',
       'N': '-.' , 
       'O': '---' ,
       'P': '.--.',
       'Q': '--.-',
       'R': '.-.' ,
       'S': '...' ,
       'T': '-'  ,
       'U': '..-' ,
       'V': '...-',
       'W': '.--' ,
       'X': '-..-',
       'Y': '-.--',
       'Z': '--..',
      '1': '.----',
      '2': '..---',
      '3': '...--',
      '4': '....-',
      '5': '.....',
      '6': '-....',
      '7': '--...',
      '8': '---..',
      '9': '----.',
      '0': '-----',
    "!": "-.-.--",
    ".": ".-.-.-",
    ",": "--..--"
    
}

function onFormSubmit(event) {
    removeElement()
    const submittedValue = document.getElementById("myInput").value
    const submittedValueArr= submittedValue.split(/([!@#$%^&*()_+\-=':"\\|: \[\]{};.<>\/? ])/) 
    console.log(submittedValueArr, 'submittedValueArr')

    submittedValueArr.forEach((word) => {
        if(word[0] !== ' ') {
        const divParent= divContainerLetter()
        document.getElementById('blocks').appendChild(divParent)   
        natoArr =['Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray', 'Yankee', 'Zulu']
        
        const lett = '0';
        
        
        for (let i = 0; i < word.length; i++) {

            const divLetterBlock = document.createElement('div')
            divLetterBlock.className = 'letter-block'

            const divLetter = document.createElement('div')
            divLetter.innerHTML = word[i].toUpperCase();
            divLetter.className = 'letter'

            const divEcho = document.createElement('div')
            if(ismorse) {
                let newWord = word.toUpperCase()
                console.log(newWord, 'newWord')
                divEcho.innerHTML = morse[newWord[i]];
            } else {
                console.log('checkingnato')
                divEcho.innerHTML = word[i];


                for(let j=0; j<natoArr.length; j++) {
                    console.log(j, natoArr[j][0])
                    if (word[i].toUpperCase()=== natoArr[j][0]){

                        divEcho.innerHTML = natoArr[j];
                        break;
                    }
                }

            }
            
            
            divEcho.className = 'echo'

            divParent.appendChild(divLetterBlock)
            divLetterBlock.appendChild(divLetter)
            divLetterBlock.appendChild(divEcho)
            
        }
    }
    })
    
    event.preventDefault()
    console.log(submittedValueArr)    

}

form.addEventListener('submit', onFormSubmit)