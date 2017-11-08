describe User do
  it 'must have a username' do
    user = User.new(first_name: 'Mike')
    expect(user.first_name).to eq 'Mike'
  end

  it 'is invalid when password is less than 8 characters' do
    user = User.new(password: 'pudding')
    expect(user).to_not be_valid
  end

  it 'can have many tweets' do
    tweet1 = Tweet.new(message: 'sup dudes')
    tweet2 = Tweet.new(message: 'sup dudettes')
    user = User.new(first_name: 'Sue', tweets:[tweet1, tweet2])
    expect(user.tweets).to include(tweet1)
  end
end
