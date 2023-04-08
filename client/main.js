const input = document.getElementById('input');
// Connect to Socket.IO server
const socket = io('http://localhost:3001');
socket.on('connect', () => {
  console.log('Connected to server');
});
// Handle incoming message events
socket.on('message', ({ data }) => {
  const messages = document.getElementById('messages');
  const li = document.createElement('li');
  li.innerText = data;
  messages.appendChild(li);
});

// Send message to server
const sendBtn = document.getElementById('sendBtn');
sendBtn.addEventListener('click', () => {
  socket.emit('message', { data: input.value });
  input.value = '';
});
