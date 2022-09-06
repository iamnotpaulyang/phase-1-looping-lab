// Code your solutions in this file
function writeCards(name, event) {
    let thankYouMessages = []
    for (let i = 0; i < name.length; i++ ) {
        thankYouMessages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    } 
    return thankYouMessages
}
function countDown() {
    let count = 10;
    while (count >= 0) {
        --count;
    console.log (count)   
    }
}
