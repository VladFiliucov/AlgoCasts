// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = 0;
  let winner = '';

  const obj = [...str].reduce((acc, el) => {
    const element = acc[el] ? (acc[el] + 1) : 1

    return Object.assign(acc, {[el]: element})
  } , {})

  for (let prop in obj) {
    if (obj[prop] > max) {
      max = obj[prop]
      winner = prop
    }
  }

  return winner;
}

console.log(maxChar("abcccccccd"))

module.exports = maxChar;
