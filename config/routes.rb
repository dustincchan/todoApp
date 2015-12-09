Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api do
    resources :todos
  end
end
