const ALPHABET_LETTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

type BatchArray = string[]
export const uuid = () => {
  try {
    const batch1Array:BatchArray = [];
    const batch2Array:BatchArray = [];
    const batch3Array:BatchArray = [];
    const batch4Array:BatchArray = [];
    const batch5Array:BatchArray = [];

    for(let i=1; i<=4; i++){
        const randomAlphabetIndex = Math.round(Math.random()*25);
        const randomNumberIndex = Math.round(Math.random()*9);

        const randomAlphabet = ALPHABET_LETTERS[randomAlphabetIndex];
        const randomNumber = NUMBERS[randomNumberIndex];
        batch1Array.push(randomAlphabet);
        batch1Array.push(randomNumber.toString());
    }
    const batch1String = batch1Array.join("");

    for(let i=1; i<=2; i++){
        const randomAlphabetIndex = Math.round(Math.random()*25);
        const randomNumberIndex = Math.round(Math.random()*9);

        const randomAlphabet = ALPHABET_LETTERS[randomAlphabetIndex];
        const randomNumber = NUMBERS[randomNumberIndex];
        batch2Array.push(randomAlphabet);
        batch2Array.push(randomNumber.toString());
    }
    const batch2String = batch2Array.join("");

     for(let i=1; i<=2; i++){
        const randomAlphabetIndex = Math.round(Math.random()*25);
        const randomNumberIndex = Math.round(Math.random()*9);

        const randomAlphabet = ALPHABET_LETTERS[randomAlphabetIndex];
        const randomNumber = NUMBERS[randomNumberIndex];
        batch3Array.push(randomAlphabet);
        batch3Array.push(randomNumber.toString());
    }
    const batch3String = batch3Array.join("");

        for(let i=1; i<=2; i++){
        const randomAlphabetIndex = Math.round(Math.random()*25);
        const randomNumberIndex = Math.round(Math.random()*9);

        const randomAlphabet = ALPHABET_LETTERS[randomAlphabetIndex];
        const randomNumber = NUMBERS[randomNumberIndex];
        batch4Array.push(randomAlphabet);
        batch4Array.push(randomNumber.toString());
    }
    const batch4String = batch4Array.join("");

            for(let i=1; i<=6; i++){
        const randomAlphabetIndex = Math.round(Math.random()*25);
        const randomNumberIndex = Math.round(Math.random()*9);

        const randomAlphabet = ALPHABET_LETTERS[randomAlphabetIndex];
        const randomNumber = NUMBERS[randomNumberIndex];
        batch5Array.push(randomAlphabet);
        batch5Array.push(randomNumber.toString());
    }
    const batch5String = batch5Array.join("");

    const unique_id = batch1String.concat("-").concat(batch2String).concat("-").concat(batch3String).concat("-").concat(batch4String).concat("-").concat(batch5String);
    
    return unique_id;
  } catch (error) {
    console.error({
      errorReason: error,
      msg: "An error occured while creating user id (uuid)",
    });
  }
};
