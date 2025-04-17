import { SignIn } from '@clerk/nextjs'
import React from 'react'

function SignInPage() {
	return (
		<main className='flex h-screen items-center justify-center p-24'>
			<SignIn/>
		</main>
	)
}

export default SignInPage