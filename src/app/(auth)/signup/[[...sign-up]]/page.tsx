import { SignUp } from '@clerk/nextjs'
import React from 'react'

function SignUpPage() {
	return (
		<main className="flex h-screen items-center justify-center p-24">
			<SignUp/>
		</main>
	)
}

export default SignUpPage