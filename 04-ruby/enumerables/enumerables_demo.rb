require "pry"

numbers = [2, 3, 4, 5, 6, 7]

new_set_of_numbers = numbers.select do |num|
  # num % 2 == 0 # this is a test. returns something only if it is true
  num.even?
end

binding.pry

puts "errr numbers"
