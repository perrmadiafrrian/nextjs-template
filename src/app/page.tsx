import { Status } from '@/components/Status'
import { getStatus } from '@/data/example'

export default async function Home() {
  const initial_data = await getStatus()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-xl font-bold">Next JS Personal Template</h1>
      <Status status={initial_data} />
    </main>
  )
}
