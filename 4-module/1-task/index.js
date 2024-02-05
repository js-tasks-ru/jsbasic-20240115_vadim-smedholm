function makeFriendsList(friends) {
  // Create the ul element
  const ulElement = document.createElement('ul');
  //Iterate through the array of friends and create li elements for each friend
  friends.forEach(friend => {
    // Create the li element
    const liElement = document.createElement('li');
    // Set the text inside the li element, combining the friend's first and last name
    liElement.textContent = `${friend.firstName} ${friend.lastName}`;
    // Adding a li element inside a ul element
    ulElement.appendChild(liElement);
   });
   // returning the created ul element
   return ulElement; // ваш код...
}
