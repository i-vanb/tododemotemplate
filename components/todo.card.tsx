'use client'
import {Circle, CircleCheck, Pencil, Save, Trash} from "lucide-react";
import {useState} from "react";
import cn from "classnames";


export type Todo = {
  id: string
  title: string
  description: string
  completed: boolean
}

type Props = {
  saveChanges: ({id, title, description}: Partial<Todo>) => void
  toggleStatus: (id: string) => void
  removeTodo: (id: string) => void
} & Todo

export const TodoCard = ({title, completed, description, toggleStatus, saveChanges, id, removeTodo}: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [inputTitle, setInputTitle] = useState<string>(title)
  const [inputDescription, setInputDescription] = useState<string>(description)

  const saveChangesHandler = () => {
    setIsEditing(false)
    saveChanges({
      id,
      title: inputTitle,
      description: inputDescription
    })
  }

  const editChanges = () => {
    setIsEditing(true)
  }

  return (
    <div className="px-5 py-3 border rounded relative">
      {isEditing
        ? <input type="text" className="border rounded px-4 py-2"
                 value={inputTitle}
                 onChange={(e) => setInputTitle(e.target.value)}
        />
        : <h2 className={cn("text-2xl font-bold", {"line-through": completed}
        )}>{title}</h2>
      }
      <div className="flex">
        {isEditing
          ? <input type="text" className="border rounded px-4 py-2 flex-1"
                   value={inputDescription}
                   onChange={(e) => setInputDescription(e.target.value)}
          />
          : <p className={cn("text-gray-500 flex-1", {"line-through": completed})}>{description}</p>
        }
        <div className="flex gap-2 items-center">
          <button onClick={() => toggleStatus(id)}>
            {completed
              ? <CircleCheck size={18}/>
              : <Circle size={18}/>
            }
          </button>
          <button onClick={() => removeTodo(id)}>
            <Trash size={18}/>
          </button>
          {isEditing
            ? <button onClick={saveChangesHandler}>
              <Save size={18}/>
            </button>
            : <button onClick={editChanges}>
              <Pencil size={18}/>
            </button>
          }
        </div>
      </div>
    </div>
  )
}