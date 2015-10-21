Rails.application.routes.draw do
  root :to => 'pages#home'

  post '/save_image' => 'pages#save_image'
  get '/index' => 'pages#index'
  get '/show/:id' => 'pages#show', as: 'show'
  get '/gallery' => 'pages#gallery'

end
