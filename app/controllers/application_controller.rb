class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

      before_action :fetch_current_user

  private 
  def fetch_current_user
    #check if someone is logged in whose date we need to load for them
  	if session[:user_id].present?
      # .find_by is safee than .find for non-existant 
  		@current_user = User.find_by :id => session[:user_id]
  		session[:user_id] = nil unless @current_user.present?
  	end
  end
end
