class Api::TodosController < ApplicationController

  def create
    todo = Todo.create!(todo_params)
    render json: todo
  end

  def update
    todo = Todo.find(params[:id])
    todo.update!(todo_params)
    render json: todo
  end

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy!
    render json: todo
  end

  def index
    render json: Todo.all
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
