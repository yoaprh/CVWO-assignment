Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do 
      resources :tasks, only: [:index, :create, :destroy, :update]
    end
  end
  get 'home/index'
    root to: 'home#index'

end
