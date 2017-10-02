class User < ActiveRecord::Base
  has_secure_password # it adds two methods to user objects
end
