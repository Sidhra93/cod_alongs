require 'active_record'

options = {
  adapter: "postgresql",
  database: "goodfoodhunting",
  username: "sidhra"
}


ActiveRecord::Base.establish_connection(options)
