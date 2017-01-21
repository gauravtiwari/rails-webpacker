# app/controllers/chatrooms_controller.rb
class ChatRoomsController < ApplicationController
  layout 'chat'

  def index
    @chat_rooms = ChatRoom.limit(5).order(id: :desc)
  end

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
    @chat_room = ChatRoom.new(chat_room_params)

    if @chat_room.save
      redirect_to chat_room_path(@chat_room.slug)
    else
      render :new
    end
  end

  def new
    @chat_room = ChatRoom.new
  end

  private

  def chat_room_params
    params.require(:chat_room).permit(:topic)
  end
end
