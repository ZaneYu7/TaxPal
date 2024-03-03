import Link from 'next/link'

import { Button } from '@/components/Button'

export function Header() {
  return (
    <div className=''>
      <h1>Header</h1>
      <Button href='/login' color='blue'>Login</Button>
      <Button href='/register' variant='outline'>Register</Button>
    </div>
  )
}
