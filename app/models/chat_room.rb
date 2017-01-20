# app/models/chatroom.rb
class ChatRoom < ApplicationRecord
  has_many :messages, dependent: :destroy
  has_many :users, through: :messages
  validates :topic, presence: true, uniqueness: true, case_sensitive: false
  before_validation :add_slug

  private

  def add_slug
    self.slug = topic.parameterize
  end
end
