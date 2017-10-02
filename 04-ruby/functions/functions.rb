# $person = "Sidhra"
person = "Sidhra"

def walk(name)
  return "#{name} is walking"
  # puts "#{$person} is walking"
end

puts walk(person)

# DO NOT USE GLOBAL VARIABLES

the_one = ""
["a", "b", "c"].each do |letter|
  if letter == "a"
    the_one = letter
  end
end

puts the_one
