class PagesController < ApplicationController
  def home
  end

  def save_image
  	@picture = Picture.new(picture: params[:picture])
  	respond_to do |format|
      if @picture.save
        format.html { redirect_to draw_path, notice: "Save process completed!" }
      else
        format.html { 
          flash.now[:notice]="Save proccess coudn't be completed!" 
      	  redirect_to draw_path
        }
      end
    end
  end

  def index
  	@pictures = Picture.all
  end

  def gallery
    @pictures = Picture.all
    gon.pictures = @pictures
  end

  def show
  	@picture = Picture.find params[:id]
  	gon.picture = @picture.picture
    # gon is a gem that allows us to pass a rails/ruby variable into our javascript.
  end




end
