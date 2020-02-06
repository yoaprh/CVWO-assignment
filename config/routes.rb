Rails.application.routes.draw do
  get 'home/index'
    root to: 'home#index'
    namespace :api do 
			namespace :v1 do 
        resources :tasks, only: [:index, :create, :destroy, :update]
      end
    end
end
