class UsersController < ApplicationController

  # GET /users
  def index
    @users = User.all
  end

  # GET /users/1
  def show
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
    @user = @current_user
  end

  # POST /users
  def create
    @user = User.new user_params
    if @user.save # Check if the user is valid (per the validations in the model)
      redirect_to root_path
    else
      render :new
    end
  end

  # PATCH/PUT /users/1
  def update
    @user = @current_user
    if @user.update user_params
      redirect_to root_path
    else
      render :edit
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def check_if_logged_in
    redirect_to root_path unless @current_user.present?
  end

    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

end
