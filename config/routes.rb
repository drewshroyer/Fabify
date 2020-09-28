Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
 namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end

  namespace :api, defaults: {format: :json} do
    resource :song, only: [:show, :index]
    resource :album, only: [:show, :index]
    resource :artist, only: [:show, :index]
  end

  namespace :api, defaults: {format: :json} do
    resource :playlist, only: [:show, :index, :create, :destory]
  end

  root to: 'static_pages#root'
end

