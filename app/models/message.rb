# app/models/message.rb
class Message < ApplicationRecord
  belongs_to :chat_room
  belongs_to :user
  after_commit :cleanup_old_messages, on: :create

  private

  def cleanup_old_messages
    Message.order(id: :desc).offset(20).destroy_all
  end
end
