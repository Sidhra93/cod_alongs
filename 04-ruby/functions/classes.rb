# def robot_speak(message)
#   puts message
# end
#
# def robot_walk(distance)
#   puts "Walk #{distance} kilometres"
# end
require "pry"

# classes gives structure to your code ad lets you create objects to use the functions inside
class Robot
  # "def initialize" is a private method in the class. you can't access anything inside including the variable. you have to create a new function which includes the instance variable if you want to access them.
  def initialize(name) # must call this so you can customize the class
    @name = name # a variable preceding with and @ is an instance variable eg @name
    @items = []
  end
  def add_food(food)
    @items.push food
  end
  def name
    @name
  end
  def speak(message)
    puts "#{@name} has spoken #{message}"
  end

  def walk(distance)
    puts "Walk #{distance} kilometres"
  end
end

# Robot.new # creates a Robot object
robots = [Robot.new("wendy"), Robot.new("jessica")]

binding.pry
