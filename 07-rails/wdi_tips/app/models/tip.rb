class Tip < ApplicationRecord
  has_many :comments
  has_many :taggings
  has_many :tags, through: :taggings

  def tags_list
    tag_array = []
    self.tags.each do |tag|
      tag_array.push(tag.name)
    end
    tag_array.join(", ")
  end
end
