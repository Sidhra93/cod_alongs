require "sinatra"
require "sinatra/reloader"
require "pry"

get "/" do
  erb :index
end

get '/answer' do
  # binding.pry
  @num1 = params[:first]
  @num2 = params[:second]
  @operator = params[:operator]
  if @operator == "+"
    @ans = @num1.to_f + @num2.to_f
  elsif @operator == "-"
    @ans = @num1.to_f - @num2.to_f
  elsif @operator == "*"
    @ans = @num1.to_f * @num2.to_f
  elsif @operator == "/"
    @ans = @num1.to_f / @num2.to_f
  end
  erb :answer
end
