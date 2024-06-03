'use client';

import {TodoList} from "@/components/todo.list";
import {todos} from "@/data/todo";
import {Todo} from "@/components/todo.card";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {TodoCreate} from "@/components/todo.create";
import {Container} from "@/components/ui/container";


export default function Home() {
  const [list, setList] = useState<Todo[]>(todos)

  const toggleStatus = (id: string) => {
    setList(list.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }

  const saveChanges = ({id, title, description}: Partial<Todo>) => {
    setList(list.map(todo => {
      if (id === todo.id) {
        return {
          ...todo,
          title,
          description
        } as Todo
      }
      return todo
    }))
  }

  const addTodo = ({title, description}: {
    title: string, description: string
  }) => {
    const newTodo: Todo = {
      id: uuidv4(),
      title,
      description,
      completed: false
    }
    setList([...list, newTodo])
  }

  const removeTodo = (id: string) => {
    setList(list.filter(todo => todo.id !== id))
  }

  return (
    <main className="my-6">
      <Container className="space-y-4">
        <h1 className="text-4xl font-bold">Todo List</h1>
        <TodoList list={list} toggleStatus={toggleStatus} saveChanges={saveChanges} removeTodo={removeTodo}/>
        <TodoCreate addTodo={addTodo}/>
      </Container>
    </main>
  );
}