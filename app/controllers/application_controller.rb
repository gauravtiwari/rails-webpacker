# app/controllers/application_controller.rb
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) do |user_params|
      user_params.permit(:name, :email, :password, :password_confirmation)
    end
  end

  private

  def store_current_location
    store_location_for(:user, request.referrer)
  end

  def after_sign_out_path_for(_resource)
    root_path
  end

  def after_sign_in_path_for(resource)
    stored_location_for(resource) || root_path
  end
end
