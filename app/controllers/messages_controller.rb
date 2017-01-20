# app/controllers/messages_controller.rb
class MessagesController < ApplicationController
  before_action :set_room, only: :create

  def create
    message = Message.new(message_params)
    message.chat_room = @room
    message.user = current_user
    if message.save
      ActionCable.server.broadcast(
        'messages',
        render(partial: 'messages/message', locals: { message: message })
      )
      head :ok
    else
      redirect_to chat_rooms_path
    end
  end

  private

  def set_room
    @room = ChatRoom.find(params[:chat_room_slug])
  end

  def message_params
    params.require(:message).permit(:body)
  end
end
