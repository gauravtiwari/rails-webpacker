# app/models/chatroom.rb
class ChatRoom < ApplicationRecord
  has_many :messages, dependent: :destroy
  has_many :users, through: :messages
  validates :topic, presence: true, uniqueness: true, case_sensitive: false
  before_validation :add_slug
  after_commit :cleanup_old_chat_rooms, on: :create

  private

  def add_slug
    self.slug = topic.parameterize
  end

  def cleanup_old_searches
    ChatRoom.order(id: :desc).offset(20).destroy_all
  end
end
