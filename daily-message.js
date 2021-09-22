//Message Options: Array of random inspirational and motivational quotes:
let quotes = ['The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela',
"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
"The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt"];
let luckyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const randomMessage = () => {
    //Message Options: Array of random inspirational and motivational quotes:
    let quotes = ['The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela', "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs", "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron", "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt"];
    let luckyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    //Randomly selects a quote and lucky number from the 2 global arrays:
    let randomQuote = Math.floor(Math.random() * quotes.length);
    let randomLuckyNumber = (Math.floor(Math.random() * luckyNumbers.length));

    //Concatenates the data into a readable string:
    let output = 'Hello!' + '\n' + 'Always remember:' +
    '\n' + quotes[randomQuote] + '\n' +
    'Your lucky number is: ' + luckyNumbers[randomLuckyNumber];
    return output;
};

console.log(randomMessage());