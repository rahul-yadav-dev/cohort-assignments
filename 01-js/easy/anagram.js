function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const checker = {};

  for (let i = 0; i < str1.length; i = i + 1) {
    if (checker[str1[i].toLowerCase()]) checker[str1[i].toLowerCase()]++;
    else checker[str1[i].toLowerCase()] = 1;
  }

  for (let i = 0; i < str2.length; i = i + 1) {
    if (!checker[str2[i].toLowerCase()] || checker[str2[i].toLowerCase()] == 0)
      return false;
    else checker[str2[i].toLowerCase()]--;

    if (checker[str2[i].toLowerCase()] == 0)
      delete checker[str2[i].toLowerCase()];
  }

  const letters = Object.keys(checker);

  return letters.length === 0;
}

console.log(isAnagram("Debit Card", "Bad Credit"));

module.exports = isAnagram;