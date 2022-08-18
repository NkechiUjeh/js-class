const seatingArrangement = []
const NUM_OF_ROWS = 4;
const NUM_OF_COLUMNS = 4;
let seatingPosition = 0;

for (let i = 0; i < NUM_OF_ROWS; i++){
    // populating the array with seat numbers

    // create a row
    const row = [];
    for(let j = 0; j < NUM_OF_COLUMNS; j++){
        // increment the seating position
        seatingPosition = seatingPosition + 1

        // create a seat
        const seat = [seatingPosition, false] 

        // add the seat to the row
        row.push(seat)
    }

    // add the row to the seating arrangement
    seatingArrangement.push(row)
}

const showSeatingArrangement = () => {
    // go through the array and log the seating arrangement to the console
    console.log("\nThis is the current seating arrangement");

    // Loop through the seating arrangement array to get each of the rows
    seatingArrangement.forEach((row) => {
        let rowStr = ""
        row.forEach((seat) => {
            // Loop through each row to get the seats
            str = str + seat[0] + "\t\t"
        })
        // log each row
        console.log(rowStr);
    })
}




const getInput = () => {
    // Check if the Seating arrangement is full before getting any input
    while(!classIsFull()){

        // Get the initial user input
        const userInput = prompt("Enter a name or number");

        // If there is no user input quit the code
        if(!userInput) return;

        // Check if the user input is a number or not
        if(isNaN(userInput)){
            // If the user input is not a number then it must be a name and we want to seat the person
            seatPerson(userInput)
        }else{
            // If the user input is a number then we want to check who is sat at that seat

            // To check who is there we need to first get the row and the column
            // The following formulae help us discern the rows and column given a seat number

            // To get the rows we use Math.ceil which rounds up values
            const row = Math.ceil(userInput / NUM_OF_ROWS) - 1;
            const col = (userInput - 4 * NUM_OF_COLUMNS) - 1

            // check if the chosen seat is full
            if(isFull(seatingArrangement[row][col])){
                // If the seat is full say the name of the person sat there
                // seatingArrangement[row][col][0] represents the user in the seat
            const person = seatingArrangement[row][col][0]
             alert(`This seat is taken by ${person}`);

            }else{
                // If the seat is empty then say the seat is empty 
                alert("This seat is empty")
            }
        }

    }

}

const seatPerson = (userInput) => {
        const seatNumber = prompt("Please enter your seat number");
        if(!seatNumber) return;
        const row = Math.ceil(seatNumber / 4) - 1;
        const col = (seatNumber - 4 * row) - 1

        if(isFull(seatingArrangement[row][col])){
            alert("This seat is taken");
            return;
        }

        seatingArrangement[row][col][0] = userInput;
        seatingArrangement[row][col][1] = true; 
        showSeatingArrangement()
    
}

const isFull = (seat) => {
    return seat[1]
}

const classIsFull = () => {
    for(let i = 0; i < seatingArrangement.length; i++){
        const row = seatingArrangement[i];
        for(let j = 0; j < row.length; j++){
            const seat = row[j];

            if(!isFull(seat)) return false 
        }
    }
    return true;
}

showSeatingArrangement()
getInput()



