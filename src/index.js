//Array that stores the words and hints for later access
//the way the data is stored it's like: [word],[hint]
const englishWords = [
    ['Giraffe', 'This animal has a long neck.'],
    ['Pizza ', 'A popular Italian dish'],
    ['Sunny','The opposite of cloudy or rainy weather.'],
    ['Computer','You are probably using one right now!'],
    ['Dragon','A mythical, fire-breathing creature.'],
    ['Starfish','A sea creature with five arms.'],
    ['Cupcake','A small, sweet treat often decorated with frosting.'],
    ['Mountain','A tall landform that can be great for hiking.'],
    ['Soccer','A popular sport played with a round ball.'],
    ['Telescope','An instrument used to observe distant objects in space'],
    ['Hamburger','A popular fast food item.'],
    ['Tropical ','A word often associated with warm, exotic locations.'],
    ['Basketball','A sport played with a round ball and hoop.'],
    ['Rainbow','A colorful arc in the sky after rainfall.'],
    ['Elephant','This animal has a long trunk.'],
    ['Fireplace ','A source of warmth and coziness in a home.']
]



//a number is generated and passed to this variable
//with this I can access a random element and take their values, in this case it's the word and hint
const random_number = Math.floor(Math.random() * englishWords.length);



//word and hint are generated and passed to the variables word and hint
//these variables will be appended latter into their respectives HTML elements

//the variable 'word' is a string and I want it to become an array. I'll pass each element of the array to the paragraphs from the .word-container. I hope i can loop over these without much trouble
const word = englishWords[random_number][0];

//here I'm using the spread operator, now the string generated above is a happy array!! 
const word_Array = [...word];
const hint = englishWords[random_number][1];

/*  Function that takes the word the user guessed it and compares it to the random word generated, all to lower case   */

function guessing() {
    const guess = (document.getElementById('input-text').value).toLowerCase();

    //if the user guess it right he wins
    if (guess === word.toLowerCase()){

        document.getElementById('image').src = './images/saved.svg';
        alert('Correct!! You won and the prisioner was saved!');

    //if the user guess it wrong he loses    
    } else {

        document.getElementById('image').src = './images/dead.svg'
        alert('You lost and the prisioner died!');

    }
}

//listening then for the click guessing:
const button_guessing = document.getElementById('button-for-word-guessing').addEventListener('click', guessing);