"use client"

import '../global.css';
import {RootProvider} from 'fumadocs-ui/provider';
import {Inter} from 'next/font/google';
import type {ReactNode} from 'react';
import {useParams} from "next/navigation";
import {source} from "@/lib/source";
import {Badge, Breadcrumb, Container, Flex, Text, TextInput} from "@code0-tech/pictor";
import Image from "next/image";
import {DocsLayout} from "fumadocs-ui/layouts/docs";

const inter = Inter({
    subsets: ['latin'],
});

export default function Layout({children}: { children: ReactNode }) {

    const params = useParams()
    const page = source.getPage(params.slug)

    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
        <body className="flex flex-col min-h-screen">
        <RootProvider search={{
            options: {},
        }}>
            <div style={{background: "rgba(255,2552,255,.1)", borderBottom: "1px solid rgba(255,2552,255,.1)"}}>
                <Container>
                    <Flex style={{gap: "0.7rem", flexDirection: "column"}} py={0.7} w={"100%"}>
                        <Flex align={"center"} justify={"space-between"}>
                            <Flex align={"center"} style={{gap: "1.3rem"}}>
                                <Image src={"/CodeZero_App_Background_Colorful.png"} alt={"CodeZero Banner"} width={160}
                                       height={0}
                                       style={{width: '42px', height: 'auto'}}/>
                                <Breadcrumb>
                                    {Array.from(params.slug).map((item) => {
                                        return <Text>{item}</Text>
                                    })}
                                </Breadcrumb>
                            </Flex>
                            <Flex align={"center"} style={{gap: "0.7rem"}}>
                                <TextInput disabled right={<Badge>⌘K</Badge>} rightType={"icon"}
                                           placeholder={"Search..."}/>
                            </Flex>
                        </Flex>
                    </Flex>
                </Container>
            </div>
            <DocsLayout tree={source.pageTree} searchToggle={{enabled: false}} themeSwitch={{enabled: false}} nav={{enabled: false}} sidebar={{footer: null, tabs: false}}>
                {children}
            </DocsLayout>
        </RootProvider>
        </body>
        </html>
    );
}
