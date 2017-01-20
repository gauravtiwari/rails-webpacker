# app/controllers/chatrooms_controller.rb
class ChatRoomsController < ApplicationController
  layout 'chat'

  def show
    @chat_room = ChatRoom.includes(:messages).find_by(slug: params[:slug])
    @message = Message.new
    response.headers['Vary'] = 'Accept'

    respond_to do |format|
      format.html
      format.json
    end
  end

  def create
    @room = ChatRoom.new(chat_room_params)

    if @room.save
      redirect_to room_path(@room.slug)
    else
      render :new
    end
  end

  def new
    @room = ChatRoom.new
  end

  private

  def chat_room_params
    params.require(:chat_room).permit(:topic)
  end
end
