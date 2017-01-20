class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.text :body
      t.references :chat_room
      t.references :user

      t.timestamps
    end
  end
end
