function getUserInput() {
  return prompt("Tell me three most important words 💚");
}

function isValidWord(word) {
  return word !== null && word.trim() !== "" && !/\d/.test(word);
}

function getFormattedWord(word) {
  let formatOption;

  do {
    formatOption = prompt(
      `Choose formatting for "${word}":\n1. Uppercase\n2. Lowercase\n3. Capitalize`
    );
  } while (
    formatOption !== null &&
    !["uppercase", "lowercase", "capitalize"].includes(
      formatOption.toLowerCase()
    )
  );

  if (formatOption === null) {
    return null;
  }

  switch (formatOption.toLowerCase()) {
    case "uppercase":
      return word.toUpperCase();
    case "lowercase":
      return word.toLowerCase();
    case "capitalize":
      return word.charAt(0).toUpperCase() + word.slice(1);
  }
}

function main() {
  const userInput = getUserInput();

  if (userInput === null) {
    return;
  }

  const words = [];
  for (let i = 0; i < 3; i++) {
    let word;

    do {
      word = prompt(`Enter the ${i + 1} word:`);
    } while (!isValidWord(word));

    const formattedWord = getFormattedWord(word);

    if (formattedWord === null) {
      return;
    }

    words.push(formattedWord);
  }

  console.log(`${words[0]} ${words[1]} ${words[2]}!`);
}

main();
