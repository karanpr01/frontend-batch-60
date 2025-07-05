import { createRoot } from "react-dom/client"
import App from "./App"

const root = createRoot(document.getElementById("root"))

root.render(
    <>
        <h1>Vite vs Webpack</h1>
        <div>
            <p><b>Vite</b> is a faster and modern build tool that serves files using native ES modules and builds only when needed, while <b>Webpack</b> is an older bundler that builds the entire app upfront and requires more configuration.</p>
        </div>
        <App />
    </>


)