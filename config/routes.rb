Rails.application.routes.draw do
  root to: 'pages#home'
  get '/home-vue-version', to: 'pages#home_vue', as: :home_vue
  get '/list-vue-version', to: 'lists#index_vue', as: :lists_vue
  get '/home-angular2-version', to: 'pages#home_angular', as: :home_angular
  get '/home-react-router', to: 'pages#home_react_router', as: :home_router
  get '/about', to: 'pages#about', as: :about
  get '/repos', to: 'pages#repos', as: :repos
  resources :lists
end
