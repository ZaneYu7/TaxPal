import Head from 'next/head';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { SelectedField, TextField } from '@/components/Field';
import { Logo } from '@/components/Logo';
import { SlimLayout } from '@/components/SlimLayout';

export default function Register() {
  return (
    <>
      <Head>
        <title>Sign up - TaxPal</title>
      </Head>
      <div className='flex '>
        <Link href='/' aria-label='Home'>
          <Logo className='w-auto h-10' />
        </Link>
      </div>

      <h2 className='mt-20 text-lg font-semibold text-gray-900'>
        Get started for free
      </h2>

      <p className='mt-2 text-sm text-gray-700'>
        Already registered?{' '}
        <Link href='/login'
          className='font-medium text-blue-600 hover:underline' >
          Sign in
        </Link>{' '}
        to your account.
      </p>

      <form action='#' className='grid grid-cols-1 mt-10 gap-y-8 sm:grid-cols-2 gap-x-6'>
        <TextField
          label='First name'
          id='first_name'
          name='first_name'
          type='text'
          autoComplete='given-name'
          required
        />
        <TextField
          label='Last name'
          id='last_name'
          name='last_name'
          type='text'
          autoComplete='family-name'
          required
        />
        <TextField
          className='col-span-full'
          label='Email address'
          id='email'
          name='email'
          type='email'
          autoComplete='email'
          required 
        />
        <TextField 
          className='col-span-full' 
          label='Password'
          id='password'
          name='password'
          type='password'
          autoComplete='new-password'
          required
        />
        <SelectedField 
          className='col-span-full'
          label="How did you hear about us?" 
          id="how_hear"
          name="how_hear"
        >
          <option value='1'>AltaVista search</option>
          <option value='2'>Super Bowl commercial</option>
          <option value='3'>Our route 34 city bus ad</option>
          <option value='4'>The "Never Use This" podcast</option>
        </SelectedField>
        <div className='col-span-full'>
          <Button
            type="submit"
            className='w-full'
            variant='solid'
            color='blue'
          >
            Sign up &rarr;
          </Button>
        </div>
      </form>
    </>
  )
}

Register.Layout = SlimLayout;