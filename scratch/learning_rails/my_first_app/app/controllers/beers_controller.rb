class BeersController < ApplicationController
  def new
    render("new")
  end

  def index
    @beers = Beer.all
    render("index")
  end

  def create
    @beer = Beer.new
    @beer = Beer.create(beer_params)
    redirect_to "/"
  end

  private

  def beer_params
    params.require(:beer).permit(:name, :country_of_origen, :average_price)
  end


  def show
  end

  def edit
  end

  def delete
  end

end
