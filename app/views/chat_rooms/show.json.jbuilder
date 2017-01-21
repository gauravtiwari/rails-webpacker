json.chat_room do
  json.id @chat_room.id
  json.topic @chat_room.topic
  json.created_at @chat_room.created_at
  json.messages @chat_room.messages.includes(:user).order(id: :desc).limit(20),
                partial: 'messages/message',
                as: :message
end
