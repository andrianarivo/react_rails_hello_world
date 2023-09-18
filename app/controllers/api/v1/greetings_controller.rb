class Api::V1::GreetingsController < ApplicationController
  def random_greeting
    @greeting = Greeting.random
  end
end
