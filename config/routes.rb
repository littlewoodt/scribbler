Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/' => 'pages#home', as: 'draw'

  post '/save_image' => 'pages#save_image'
  get '/index' => 'pages#index', as: 'index'
  get '/show/:id' => 'pages#show', as: 'show'
  get '/gallery' => 'pages#gallery', as: 'gallery'

  get '/new' => 'users#new'
  get '/login'=> 'session#new', as: 'login'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy', as: 'logout'

  get '/index' => 'users#index', as: 'users'

  resources :pictures, :users

end
