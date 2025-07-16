const fetch = require('node-fetch');

async function addTestUser() {
  const data = {
    discordId: '1393030255249330267',
    name: 'TestUser',
    username: 'TestUser#1234',
    photoUrl: 'https://cdn.discordapp.com/avatars/1393030255249330267/avatar.png',
    bio: 'This is a test bio',
    connection: 'TestConnection',
  };

  const response = await fetch('http://localhost:8000/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  console.log(result);
}

addTestUser();
