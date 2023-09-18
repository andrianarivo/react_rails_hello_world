Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")

  namespace :api do
    namespace :v1 do
      get 'greeting', to: 'greetings#random_greeting', as: 'greeting', defaults: { format: 'json' }
    end
  end

  root "root#index"
end
