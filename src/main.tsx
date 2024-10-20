import { StrictMode } from 'react'
import App from './App.tsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import stringToBoolean from '@utils/utils'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

async function enableMocking() {
    if (stringToBoolean(import.meta.env.VITE_ENABLE_MSW) === false) {
        return
    }

    const { worker } = await import('./mocks/browser')

    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
    return worker.start()
}
enableMocking().then(() => {
    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    )
})
