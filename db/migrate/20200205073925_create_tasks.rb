class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.text :description
      t.date :created
      t.date :due
      t.text :tags

      t.timestamps
    end
  end
end
