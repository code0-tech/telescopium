export default function HomePage() {
    return (
        <script dangerouslySetInnerHTML={{__html:
            `window.location.replace("./code0/${process.env.NEXT_PUBLIC_ARTIFACT_VIEWER === "true" ? "index.html" : ""}")`
        }}/>
    );
}
