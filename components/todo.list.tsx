import {Todo, TodoCard} from "@/components/todo.card";
import {memo} from "react";

export type Props = {
  list: Todo[]
} & {
  toggleStatus: (id:string) => void
  saveChanges: ({id, title, description}:Partial<Todo>) => void
  removeTodo: (id:string) => void
}

const Todos = ({list, toggleStatus, saveChanges, removeTodo}:Props) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {list.map(({id, title, description, completed}) => (
        <TodoCard key={id} id={id}
                  title={title}
                  description={description}
                  completed={completed}
                  toggleStatus={toggleStatus}
                  saveChanges={saveChanges}
                  removeTodo={removeTodo}
        />
      ))}
    </div>
  )
}

export const TodoList = memo(Todos)
