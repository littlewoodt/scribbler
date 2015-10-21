Rails.application.routes.draw do
  root :to => 'pages#home', as: 'draw'

  post '/save_image' => 'pages#save_image'
  get '/index' => 'pages#index', as: 'index'
  get '/show/:id' => 'pages#show', as: 'show'
  get '/gallery' => 'pages#gallery', as: 'gallery'

end
