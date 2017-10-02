require 'sinatra'

get '/about' do
  # response to the get request goes here
  response = "lucky13 " + "is awesome"
  return response
end

get "/donate" do
  # html = "<html><head></head><body><h1>" + Time.now.to_s + "</h1></body></html>"
  # response =  "thank you for your donation"
  # return html
  response = erb(:donate)
  return response
end
