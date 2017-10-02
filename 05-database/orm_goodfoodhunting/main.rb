
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'
require_relative 'db_config'
require_relative 'models/dish'
require_relative 'models/user'

enable :sessions

# "helpers" are methods that can be seen by views and main.rb
helpers do
  def current_user
    User.find_by(id: session[:user_id])
  end

  def logged_in?
    !!current_user
  end

end

get '/' do
  @dishes = Dish.order(created_at: :desc).limit(3)
  erb :index
end

# --------------NEW DISH PAGE REQUESTS-----------

get '/dishes/new' do
  erb :new
end

post '/dishes' do
  # Dish.create(name: params[:name], image_url: params[:image_url])
  dish = Dish.create
  dish.name = params[:name]
  dish.image_url = params[:image_url]
  dish.save
  redirect '/dishes'
end

get '/dishes' do
  @dishes = Dish.all
  erb :dishes
end

get '/dishes/:id' do
  @dish = Dish.find(params[:id])
  erb :show
end

get '/dishes/:id/edit' do
  @dish = Dish.find(params[:id])
  erb :edit
end

# UPDATING THE ACTUAL DETAILS

put '/dishes/:id' do
  dish = Dish.find(params[:id])
  dish.name = params[:name]
  dish.image_url = params[:image_url]
  dish.save
  redirect "/dishes/#{params[:id]}"
end

delete '/dishes/:id' do
  redirect '/login' unless logged_in?

  dish = Dish.find(params[:id])
  dish.destroy
  redirect "/dishes"
end

# --------------------- LOGIN PAGE -------------------------

get '/login' do
  erb :login
end

post '/session' do
  # find user
  user = User.find_by(email: params[:email])
  if user && user.authenticate(params[:password])
    # successful create the session and then redirect
    session[:user_id] = user.id

    # successful redirect
    redirect '/'
  else
    @message = 'incorrect email or password'
    erb :login
  end
end

delete '/session' do
  return 'go away' unless logged_in?
  session[:user_id] = nil
  redirect '/login'
end
