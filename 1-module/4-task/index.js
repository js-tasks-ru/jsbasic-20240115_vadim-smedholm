function checkSpam(str) {
  let spam1 = '1XbeT'.toLowerCase();
  let spam2 = 'XXX'.toLowerCase();
  let strdown = str.toLowerCase();
  if (strdown.includes(spam1) || str.includes(spam2))
    return true;
  else return false; // ваш код...
}
