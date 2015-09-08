class WordsController < ApplicationController
  def index
    stuff =  HTTParty.get("http://thesaurus.altervista.org/service.php?word=peace&language=en_US&output=json&key=SNtpyLXewcBqDoOPGJ4J&callback=process")
     @stuff = stuff
  end
end
