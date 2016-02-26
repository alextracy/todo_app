class TodosController < ApplicationController

	def index
    @todos = Todo.all
  end

  def create
    @todo = Todo.create(todo_params)

    respond_to do |format|
      format.html { redirect_to root_path }
      format.json { head :no_content }
      format.js  { render inline: "location.reload();"  }
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy

    respond_to do |format|
          format.html { redirect_to todo_url, notice: 'Product was successfully destroyed.' }
          format.json { head :no_content }
          format.js  { render inline: "location.reload();"  }
    end
  end

  private
    def todo_params
      params.require(:todo).permit(:description, :priority)
    end
end
