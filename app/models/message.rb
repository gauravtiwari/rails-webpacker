# app/models/message.rb
class Message < ApplicationRecord
  belongs_to :chat_room
  belongs_to :user
end
