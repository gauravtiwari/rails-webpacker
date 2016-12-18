Rails.application.routes.draw do
  root to: 'pages#home'
  get '/home-vue-version', to: 'pages#home_vue', as: :home_vue
  get '/list-vue-version', to: 'lists#index_vue', as: :lists_vue
  resources :lists
end
