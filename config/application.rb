require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module RailsWebpacker
  class Application < Rails::Application
    config.x.webpacker[:packs_dist_path] = 'packs'
  end
end
