Rake::Task['assets:precompile']
  .clear_prerequisites
  .enhance(['assets:compile_environment'])

namespace :assets do
  task compile_environment: :webpack do
    Rake::Task['assets:environment'].invoke
  end

  desc 'Compile assets with webpack'

  task :yarn do
    sh 'bundle exec ./bin/yarn'
  end

  task :webpack do
    sh 'bundle exec rails webpacker:compile'
  end
end
