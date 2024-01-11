import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className='min-h-svh flex flex-col'>

      <h1>navbar</h1>

      <div className='flex grow'>

        {/*todo: sidebar'ın kendisi direkt auth a bağlı*/}
        <h1 className='basis-1/4 min-w-0'>
          {/*todo: sidebar'a vision board, user, log out konacak*/}
          sidebar
        </h1>

        <h1 className='basis-3/4'>
          {/* todo: main or post route*/}
          <Outlet/>
        </h1>

      </div>
    </div>
  )
}
