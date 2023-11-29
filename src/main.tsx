import App from './App.tsx'
import "./assets/css/index.css"
import ReactDOM from 'react-dom/client'
import {HandlerModalProvider} from "./context/HandlerModal.tsx"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <HandlerModalProvider>
    <App />
  </HandlerModalProvider>,
)
