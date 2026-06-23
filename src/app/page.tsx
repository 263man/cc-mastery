'use client'

import { useState } from 'react'

type Task = { id: number; text: string }

export function Page() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [input, setInput] = useState('')

  function addTask() {
    const text = input.trim()
    if (!text) return
    setTasks(prev => [...prev, { id: Date.now(), text }])
    setInput('')
  }

  return (
    <main className="max-w-md mx-auto mt-16 p-6">
      <h1 className="text-2xl font-bold mb-6">Task Tracker</h1>
      <div className="flex gap-2 mb-6">
        <input
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTask()}
          placeholder="New task..."
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          onClick={addTask}
          disabled={!input.trim()}
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map(task => (
          <li key={task.id} className="bg-gray-100 dark:bg-gray-800 rounded px-4 py-2">
            {task.text}
          </li>
        ))}
      </ul>
    </main>
  )
}
