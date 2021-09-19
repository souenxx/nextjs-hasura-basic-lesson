import { useReactiveVar } from '@apollo/client'
import { VFC } from 'react'
import Link from 'next/link'
import { todoVar } from '../cache'

export const LocalStateB: VFC = () => {
  const todos = useReactiveVar(todoVar)
  return (
    <>
      {todos?.map((task, index) => {
        return (
          <p className="mb-3 y-1" key={index}>
            {task.title}
          </p>
        )
      })}
      <Link href="/local-state-a">
        <a>Back</a>
      </Link>
    </>
  )
}
