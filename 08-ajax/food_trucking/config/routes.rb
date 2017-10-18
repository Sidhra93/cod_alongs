Rails.application.routes.draw do
  resources :comments
  resources :likes
  resources :dishes
  resources :users

  # namespace :api do
  #   resources :comments (this gives alls the routes as api, which is not necessary when you want only one or two)
  # end

  get '/api/dishes', to: 'api/dishes#index'
  post '/api/likes', to: 'api/likes#create'
  post '/api/comments', to: 'api/comments#create'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
