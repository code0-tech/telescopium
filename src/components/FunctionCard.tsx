import {FunctionDefinition} from "@code0-tech/sagittarius-graphql-types";
import React from "react";
import {Card as FumaCard} from "fumadocs-ui/components/card";
import {IconNote, IconX} from "@tabler/icons-react";
import {md5} from "js-md5";

export interface FunctionCardProps {
    definition?: FunctionDefinition
}

const GOLDEN_ANGLE = 137.50776405003785

const extractIdNumber = (s: string) => {
    const m = s.match(/\/(\d+)\s*$/)
    return m ? Number(m[1]) : null
}

export const hashToColor = (s: string, from: number = 25, to: number = 320): string => {
    const range = to - from;
    const n = extractIdNumber(s);
    if (n != null) {
        const hue = from + ((n * GOLDEN_ANGLE) % range);
        return `hsl(${hue}, 100%, 72%)`;
    }

    const h = md5(md5(s));
    const a = parseInt(h.slice(0, 8), 16);
    return `hsl(${from + (a % range)}, 100%, 72%)`;
}

const FunctionCard: React.FC<FunctionCardProps> = (props) => {

    const {definition} = props

    const splitTemplate = (str: string) =>
        str
            .split(/(\$\{[^}]+\})/)
            .filter(Boolean)
            .flatMap(part =>
                part.startsWith("${")
                    ? [part.slice(2, -1)]          // variable name ohne ${}
                    : part.split(/(\s*,\s*)/)      // Kommas einzeln extrahieren
                        .filter(Boolean)
                        .flatMap(p => p.trim() === "," ? [","] : p.trim() ? [p.trim()] : [])
            );


    const displayMessage = splitTemplate(definition?.displayMessages?.[0].content ?? "Some ${example} function")
    const renderedMessage = displayMessage.map((part, index) => {
        if (definition?.parameterDefinitions?.nodes?.find(pd => pd?.identifier === part)) {
            return <span style={{
                background: "#191825",
                padding: ".116667rem .35rem",
                borderRadius: "1rem",
                boxShadow: "inset 0 1px 1px #bfbfbf1a"
            }}>
                {part}
            </span>
        }

        return <span>{part}</span>
    })

    return <FumaCard title={""} key={"function-card-" + definition?.identifier}>
        <div style={{gap: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <FumaCard title={""} style={{textWrap: "nowrap", background: "#070514", borderRadius: "1rem", padding: "0.35rem 0.7rem", border: "1px solid #bfbfbf1a"}}>
                <div style={{gap: "0.35rem", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <IconNote color={hashToColor(definition?.identifier ?? "")} size={16}/>
                    {renderedMessage}
                </div>
            </FumaCard>
            <FumaCard title={""} style={{background: "#070514", border: "none"}}>
                <div style={{
                    background: "#2c2a36",
                    padding: ".35rem .7rem",
                    borderRadius: "1rem",
                    boxShadow: "inset 0 1px 1px #bfbfbf1a",
                    width: "fit-content",
                    display: "flex",
                    gap: "0.35rem",
                    alignItems: "center",
                    fontSize: "12px",
                    marginBottom: "1rem",
                }}>
                    <IconNote color={hashToColor(definition?.identifier ?? "")} size={13}/>
                    {definition?.names?.[0].content}
                    <IconX size={13}/>
            </div>
                <div style={{flexDirection: "column", gap: "1rem", display: "flex"}}>
                    {definition?.parameterDefinitions?.nodes?.map(pd => (
                        <div key={"param-" + pd?.identifier}>
                            <span>{pd?.names?.[0].content}</span>
                            <p style={{margin: "0", paddingTop: "0.7rem"}}> {pd?.descriptions?.[0].content}</p>
                            <div style={{
                                marginTop: "0.7rem",
                                background: "#191825",
                                borderRadius: "1rem",
                                boxShadow: "inset 0 1px 1px #bfbfbf1a",
                                height: "40px",
                                width: "100%",
                                position: "relative",
                                display: "block"
                            }}/>
                        </div>
                    ))}
                </div>
            </FumaCard>
        </div>
    </FumaCard>
}

export default FunctionCard;