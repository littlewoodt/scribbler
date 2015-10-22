class SessionController < ApplicationController

	def new
		#if @current_user.present?
		#	redirect_to root_path
		#else
		#	render :new
		#end
	end

	def create #new user create
	  	user = User.find_by :email => params[:email]
	  	if user.present? && user.authenticate(params[:password])
	  		session[:user_id] = user.id
	  		redirect_to root_path
	  	else
	  		flash[:message] = "invalid email or password. Please try again."
	  		redirect_to login_path
		end
	end

	def destroy #logout user when the session ended
		session[:user_id] = nil
		#@current_user = nil
		redirect_to root_path
	end
end
