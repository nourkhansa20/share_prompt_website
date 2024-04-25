import Nav from '@components/Nav'
import '@styles/globals.css'

import { UserProvider } from '@auth0/nextjs-auth0/client';

export const metadata = {
    title: 'Proptopia',
    description: 'Discover & Share Ai Prompts'
}

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
            <UserProvider>
                <body>
                    <div className='main'>
                        <div className='gradient' />
                    </div>
                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </body>
            </UserProvider>

        </html>
    )
}

