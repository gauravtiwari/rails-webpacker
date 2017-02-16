import { render } from 'react-dom';
import React from 'react';
import Chat from '../chat';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('chat-room');
  const roomId = node.getAttribute('data-room-id');
  render(<Chat roomId={roomId} />, document.getElementById('chat-room'));
});
