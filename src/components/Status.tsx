'use client'

import { getStatus } from '@/data/example'
import { useQuery } from '@tanstack/react-query'

export function Status({ status }: { status: string }) {
  const { data, refetch } = useQuery({
    queryKey: ['status'],
    queryFn: getStatus,
    initialData: status,
  })

  return (
    <>
      <span>Random string: {data}</span>
      <button onClick={() => refetch()} className="btn btn-primary">
        Random
      </button>
    </>
  )
}
