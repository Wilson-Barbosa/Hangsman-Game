//Array that stores the words and their hints
//the data is stored like: [ word ], [ hint ]
const englishWords = [
    ['Giraffe', 'This animal has a long neck.'],
    ['Pizza', 'A popular Italian dish'],
    ['Sunny','The opposite of cloudy or rainy weather.'],
    ['Computer','You are probably using one right now!'],
    ['Dragon','A mythical, fire-breathing creature.'],
    ['Starfish','A sea creature with five arms.'],
    ['Cupcake','A small, sweet treat often decorated with frosting.'],
    ['Mountain','A tall landform that can be great for hiking.'],
    ['Soccer','A popular sport played with a round ball.'],
    ['Telescope','An instrument used to observe distant objects in space'],
    ['Hamburger','A popular fast food item.'],
    ['Tropical','A word often associated with warm, exotic locations.'],
    ['Basketball','A sport played with a round ball and hoop.'],
    ['Rainbow','A colorful arc in the sky after rainfall.'],
    ['Elephant','This animal has a long trunk.'],
    ['Fireplace','A source of warmth and coziness in a home.']
]









/* Function that effectively starts the game */
function starting_the_game() {

    //a number is generated and passed to this variable
    const random_number = Math.floor(Math.random() * englishWords.length);

    //with this I can iterate each letter from the random word to the 
    for (let i = 0; i < word_Array.length; i++){
        adding_letters(word_Array[i]);
    }


    //adding the hint 
    document.getElementById('hint').innerText = hint;

    //adding the first image
    const image = document.getElementById('image');
    image.setAttribute('src', 'images/start.svg')
    
    return random_number;
}




/* Event Listener to start the game */
document.getElementById('new-game').addEventListener('click', starting_the_game);





//the variable 'word' is a string and I want it to become an array so that i can append it later into #word-container
const word = englishWords[random_number][0];
const hint = englishWords[random_number][1];


//here I'm using the spread operator to parse 'word' string to an array
const word_Array = [...word];









/* This is a function that creates a P elemet */
function adding_letters(letter){
    //creating a p element, placing text and attributing the proper class for styling;
    let p_element = document.createElement('p');
    p_element.className = 'individual-letter';
    p_element.innerText = `${letter}`;

    //grabbint the div were the letters will go into
    const word_Container = document.getElementById('word-container');

    //appending each letter
    word_Container.appendChild(p_element);
}










/*  This function takes the word the user guessed and compares it to the randomly generated word, both are converted to lowercase.  */
function guessing() {
    const guess = (document.getElementById('input-text').value).toLowerCase();


    //if the user guess it right he wins
    if (guess === word.toLowerCase()){

        document.getElementById('image').setAttribute('src', './images/saved.svg');
        alert('Correct!! You won and the prisioner was saved!');

    //if the user guess it wrong he loses    
    } else {

        document.getElementById('image').setAttribute('src', './images/dead.svg');
        alert('You lost and the prisioner died!');

    }
}

//listening then for the click guessing:
const button_guessing = document.getElementById('button-for-word-guessing').addEventListener('click', guessing);