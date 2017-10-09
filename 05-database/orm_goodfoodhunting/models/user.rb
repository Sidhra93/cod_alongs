class User < ActiveRecord::Base
  has_many :comments
  has_secure_password # it adds two methods to user objects (password and authenticate)
end
