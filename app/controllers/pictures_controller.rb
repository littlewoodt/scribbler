class PicturesController < ApplicationController

  def destroy
    picture = Picture.find params[:id]
    picture = picture.destroy
    redirect_to gallery_path
    #@picture.destroy
  end

end