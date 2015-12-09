class UpdateDone < ActiveRecord::Migration
  def change
    change_column :todos, :done, :boolean, default: false
  end
end
