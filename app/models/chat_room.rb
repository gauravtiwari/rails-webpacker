# app/models/chatroom.rb
class ChatRoom < ApplicationRecord
  has_many :messages, dependent: :destroy
  has_many :users, through: :messages
  validates :topic, presence: true, uniqueness: true, case_sensitive: false
  validates_format_of :topic, with: /^[A-Za-z0-9 ]*$/
  before_validation :add_slug
  after_commit :cleanup_old_chat_rooms, on: :create

  private

  def add_slug
    self.slug = topic.parameterize
  end

  def cleanup_old_chat_rooms
    ChatRoom.order(id: :desc).offset(20).destroy_all
  end
end
