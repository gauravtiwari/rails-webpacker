class CreateChatRooms < ActiveRecord::Migration[5.1]
  def change
    create_table :chat_rooms do |t|
      t.string :topic
      t.string :slug

      t.timestamps
    end
  end
end
