10.times{
  Todo.create!(
    title: Faker::Company.catch_phrase,
    body: Faker::Hacker.say_something_smart
  )
}
