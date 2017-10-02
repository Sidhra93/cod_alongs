
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

def run_db(sql)
  conn = PG.connect(dbname: "goodfoodhunting")
  records = conn.exec(sql)
  conn.close
  records
end

get '/' do
  redirect "/dishes"
end

# --------------NEW DISH PAGE REQUESTS-----------

get '/dishes/new' do
  erb :new
end

post '/dishes' do
  sql = "INSERT INTO dishes(name, image_url) VALUES('#{params[:name]}', '#{params[:image_url]}');"
  run_db(sql)
  redirect '/dishes'
end

get '/dishes' do
  # conn = PG.connect( { dbname: "goodfoodhunting" } ) # the curly braces are optional
  # @dishes = conn.exec('SELECT * FROM dishes;')
  @dishes = run_db('SELECT * FROM dishes ORDER BY name;')
  erb :dishes
end

get '/dishes/:id' do
  # conn = PG.connect(dbname: "goodfoodhunting")
  sql = "SELECT * FROM dishes WHERE id = #{params[:id]};"
  # @dish =conn.exec(sql).first
  @dish = run_db(sql).first
  # binding.pry
  erb :show
end

# get '/dish_details' do
#   conn = PG.connect(dbname: "goodfoodhunting")
#   sql = "SELECT * FROM dishes WHERE id = #{params[:id]};"
#   @dish =conn.exec(sql).first
#   erb :show
# end

# -------------EDIT PAGE REQUESTS----------
# GETTING THE DETAILS INTO THE FORM

get '/dishes/:id/edit' do
  sql = "SELECT * FROM dishes WHERE id = #{params[:id]};"
  @dish = run_db(sql).first
  erb :edit
end

# UPDATING THE ACTUAL DETAILS

put '/dishes/:id' do
  sql = "UPDATE dishes SET name = '#{params[:name]}', image_url = '#{params[:image_url]}' WHERE id = #{params[:id]};"
  run_db(sql)
  redirect "/dishes/#{params[:id]}"
end

delete '/dishes/:id' do
  sql = "DELETE FROM dishes WHERE id = #{params[:id]};"
  run_db(sql)
  redirect "/dishes"
end
