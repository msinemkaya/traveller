import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className='flex min-h-svh'>
      <h1 className='basis-1/4 min-w-0'>
        sidebar
      {/* todo: burda user auth ise wishlist-to do görüncek */}
      </h1>
      <h1 className='basis-3/4'>
        main page
        {/* todo: burdaki outlet daha fazla gör dersek devreye gircek o postun detaylarını göstercek olan route devreye girck*/}
        <Outlet/>
      </h1>
    </div>
  )
}
