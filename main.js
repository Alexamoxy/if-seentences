const firstName = prompt(`Вкажіть, будь ласка, ваше ім'я:`);
const lastName = prompt(`Вкажіть, будь ласка, ваше прізище:`);

const day = +prompt("Вкажіть, будь ласка, ваш день народження:");
const month = +prompt("Вкажіть, будь ласка, ваш місяць народження:");

const year = +prompt("Вкажіть, будь ласка, ваш рік народження:");

const todayYear = 2022;

let zodiac;

if (month === 1) {
  if (day >= 20) {
    zodiac = "Aquarius";
  } else {
    zodiac = "Capricorn";
  }
} else if (month === 2) {
  if (day <= 18) {
    zodiac = "Aquarius";
  } else {
    zodiac = "Pisces";
  }
} else if (month === 3) {
  if (day <= 20) {
    zodiac = "Pisces";
  } else {
    zodiac = "Aries";
  }
} else if (month === 4) {
  if (day <= 19) {
    zodiac = "Aries";
  } else {
    zodiac = "Taurus";
  }
} else if (month === 5) {
  if (day <= 20) {
    zodiac = "Taurus";
  } else {
    zodiac = "Gemini";
  }
} else if (month === 6) {
  if (day <= 20) {
    zodiac = "Gemini";
  } else {
    zodiac = "Cancer";
  }
} else if (month === 7) {
  if (day <= 22) {
    zodiac = "Cancer";
  } else {
    zodiac = "Leo";
  }
} else if (month === 8) {
  if (day <= 22) {
    zodiac = "Leo";
  } else {
    zodiac = "Virgo";
  }
} else if (month === 9) {
  if (day <= 22) {
    zodiac = "Virgo";
  } else {
    zodiac = "Libra";
  }
} else if (month === 10) {
  if (day <= 22) {
    zodiac = "Libra";
  } else {
    zodiac = "Scorpio";
  }
} else if (month === 11) {
  if (day <= 21) {
    zodiac = "Scorpio";
  } else {
    zodiac = "Sagittarius";
  }
} else if (month === 12) {
  if (day <= 21) {
    zodiac = "Sagittarius";
  } else {
    zodiac = "Capricorn";
  }
}

const yearsOld = todayYear - year;

let leapYear = false;

if (year % 400 === 0) {
  leapYear = true;
} else if (year % 100 !== 0 && year % 4 === 0) {
  leapYear = true;
}

const leepText = leapYear ? " (Leap year)" : "";
console.log(
  `User Bio: ${firstName} ${lastName}, ${yearsOld} роки${leepText}, ${zodiac};`
);
