# frozen_string_literal: true

class Api::V1::GreetingsController < ApplicationController

  def random_greeting
    @greeting = Greeting.random
  end

end
