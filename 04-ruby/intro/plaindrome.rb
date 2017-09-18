# input = "racecar!"

# input = input.gsub(/[!]/,"")

# if input == input.reverse()
#   puts "yes"
# else
#   puts "no"
# end

def palindrome(str)
  stripped = str.gsub(/[^\w]/, "").downcase
  if stripped === str.reverse
    return true
  else
    return false
  end
end

puts palindrome("racecar")


# [2] pry(main)> input = "racecar!"
# => "racecar!"
# [3] pry(main)> input.gsub(/!/, "")
# => "racecar"
# [4] pry(main)> input
# => "racecar!"
# [5] pry(main)> exit
# sidhra@sidhra-HP:~/wdi/code_alongs/03-ruby/intro$ ruby plaindrome.rb
# yes
# sidhra@sidhra-HP:~/wdi/code_alongs/03-ruby/intro$ pry
# [1] pry(main)> input = "Racecar!"
# => "Racecar!"
# [2] pry(main)> input.downcase
# => "racecar!"
# [3] pry(main)> input.downcase.gsub(/!/, "")
# => "racecar"
# [4] pry(main)>
# [4] pry(main)>
