require "pry"
require "sinatra"
require "sinatra/reloader"

get "/fries" do
  # binding.pry
  if params["size"] == "small"
    return "small fries"
  elsif params["size"] == "medium"
    return "medium fries"
  elsif params["size"] == "large"
    return "large fries"
  end
  # "here are your fries"
end
