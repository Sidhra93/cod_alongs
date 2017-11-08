class DishesController < ApplicationController
  def index
    @dishes = Dish.all
  end

  def show
    @dish = Dish.find(params[:id])
  end

  def new
  end

  def create
      dish = Dish.new
      dish.name = params[:name]
      dish.image = params[:image]
      dish.save
      redirect_to "/dishes/#{dish.id}"
  end
end
