'use client'
import {Circle, CircleCheck, Pencil, Save} from "lucide-react";
import {useState} from "react";
import cn from "classnames";


type Props = {
  addTodo: ({title, description}:{title:string, description:string}) => void
}

export const TodoCreate = ({addTodo}:Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [inputTitle, setInputTitle] = useState<string>("")
  const [inputDescription, setInputDescription] = useState<string>("")

  const saveChanges = () => {
    addTodo({
      title: inputTitle,
      description: inputDescription
    })
    setIsEditing(false)
    setInputTitle("")
    setInputDescription("")
  }

  if(!isEditing) {
    return (
      <button onClick={()=>setIsEditing(true)} className="px-5 py-3 border rounded">
        Add Todo
      </button>
    )
  }

  return (
    <div className="px-5 py-3 border rounded relative space-y-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="title">Title</label>
        <input type="text" className="border rounded px-4 py-2"
               value={inputTitle}
               onChange={(e) => setInputTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description">Description</label>
        <input type="text" className="border rounded px-4 py-2"
               value={inputDescription}
               onChange={(e) => setInputDescription(e.target.value)}
        />
      </div>
      <div className="flex gap-4">
        <button onClick={saveChanges}>
          <Save />
        </button>
        <button onClick={()=>setIsEditing(false)}>
          Cancel
        </button>
      </div>
    </div>
  )
}