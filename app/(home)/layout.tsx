import type {ReactNode} from 'react';

export default function Layout({children}: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <meta httpEquiv={"refresh"} content={"0; URL=code0"}/>
        </head>
        <body>
        {children}
        </body>
        </html>
    );
}
