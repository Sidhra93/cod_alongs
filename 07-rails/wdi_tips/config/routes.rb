Rails.application.routes.draw do
  resources :comments
  resources :tips

                    # <controller>#<action/method>
                    # pages_controller.rb # def about
  get '/about', to: 'pages#about'

                          # pages_controller.rb # def contact
  get '/contact_us', to: 'pages#contact'

  get '/', to: 'pages#home'
end
