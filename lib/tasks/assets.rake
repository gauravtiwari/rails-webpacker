Rake::Task['assets:precompile']
  .clear_prerequisites
  .enhance(['assets:compile_environment'])

namespace :assets do
  task compile_environment: [:yarn, :webpack] do
    Rake::Task['assets:environment'].invoke
  end

  desc 'Install node deps via yarn'

  task :yarn do
    sh 'bundle exec ./bin/yarn'
  end

  desc 'Compile assets with webpack'

  task :webpack do
    sh 'bundle exec rails webpacker:compile'
  end
end
