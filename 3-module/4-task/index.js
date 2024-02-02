function showSalary(users, age) {
  const filtered_Users = users.filter(user => user.age <= age);
  const result = filtered_Users.map(user => `${user.name}, ${user.balance}`).join('\n');
  return result;// ваш код...
}

