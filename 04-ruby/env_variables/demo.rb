require "httparty"

response = HTTParty.get("http://omdbapi.com/?t=jaws&apikey=#{ENV["OMDB_API_KEY"]}")
