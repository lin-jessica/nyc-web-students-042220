class RappersController < ApplicationController
  def index
    @rappers = Rapper.all
  end

  def new
    @rapper = Rapper.new
  end

  def fire
    @rapper = Rapper.find(params[:id])
  end

  def show
    @rapper = Rapper.find(params[:id])
  end

  def create
    byebug
    @rapper = Rapper.create(rapper_params)
  end

  def contact_us
    more_info = params[:rapper][:more_info]

  end



  def edit
  end

  def update
  end

  def delete
  end

private

  def rapper_params
    params.require(:rapper).permit(:name, :age, :album_sales, :fire)
  end
end
