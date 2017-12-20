class Order < ApplicationRecord
  include HTTParty
  base_uri 'https://jsonplaceholder.typicode.com'
  format :json

  # def initialize(api_key)
  #   @options = { :headers => {
  #               'x-api-token' => api_key }
  #              }
  # end

  def index
    resp = self.class.get '/photos'
    JSON.parse(resp.body)
  end
end


    