import type {ReactNode} from 'react';

export default function Layout({children}: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head/>
        <body>
        {children}
        </body>
        </html>
    );
}
