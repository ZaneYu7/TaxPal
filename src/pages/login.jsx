import Head from 'next/head';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { TextField } from '@/components/Field';
import { Logo } from '@/components/Logo';
import { SlimLayout } from '@/components/SlimLayout';

export default function Login() {
  return (
    <>
      <Head>
        <title>Sign in - TaxPal</title>
      </Head>
      <div className='flex '>
        <Link href='/' aria-label='Home'>
          <Logo className='w-auto h-10' />
        </Link>
      </div>

      <h2 className='mt-20 text-lg font-semibold text-gray-900'>
        Sign in to your account
      </h2>

      <p className='mt-2 text-sm text-gray-700'>
        Don't have an account?{' '}
        <Link href='/register'
          className='font-medium text-blue-600 hover:underline' >
          Sign up
        </Link>{' '}
        for a free trial.
      </p>
      <form action='#' className='grid grid-cols-1 mt-10 gap-y-8'>
        <TextField 
          label='Email address'
          id='email'
          name='email'
          type='email'
          autoComplete='email'
          required
        />
        <TextField 
          label='Password'
          id='password'
          name='password'
          type='password'
          autoComplete='current-password'
          required
        />
        <div>
          <Button 
          type="submit" 
          className='w-full'
          variant='solid'
          color='blue'  
        >
            Sign in &rarr;
          </Button>
        </div>
      </form>
      
    </>
  )
}

Login.Layout = SlimLayout;