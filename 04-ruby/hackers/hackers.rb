require "pry"
require "fileutils"

hackers = ['Ariel', 'Darryl', 'Fiona', 'Hsing', 'Jessica', 'Jon', 'Lyle', 'Pauline', 'Ryan M', 'Ryan S', 'Sidhra', 'Trystan', 'Wendy']


# for i in 0..hackers.size do
#   hacker = hackers[i].downcase.gsub(/\W/, "_");
#   FileUtils.mkdir(hacker)
#   FileUtils.cd(hacker)
#   FileUtils.touch("README.md")
#   FileUtils.cd("../")
# end

hackers.each do |hacker|
  folder_name = hacker.downcase.gsub(/\s/,"_")
  FileUtils.mkdir(folder_name)
  FileUtils.cd(folder_name)
  FileUtils.touch("README.md")
  FileUtils.cd("../")
end

# for name in hackers do
#   puts name
# end


# loop do
#   puts "hello world"
# end

# loop { puts "hello world"}

# while condition
# end
