import { useContext } from "react"
import "./assets/css/App.css"

import Item from "./components/Item"
import Modal from "./components/Modal"
import Switch from "./components/Switch.tsx"
import CounterInput from "./components/CounterInput.tsx"
import { ModalContext } from "./context/HandlerModal.tsx"

export default function App() {
  const contextModal = useContext(ModalContext)

  if (contextModal === undefined) {
    return null
  }

  const { modalState, createHandlerModal } = contextModal

  return (
    <>
      {
        modalState &&
        <Modal />
      }
      <h1 style={{ textAlign: "center", color: "rgb(220, 45, 45)" }}>YT Tools</h1>
      <div className="content-items">
        <Item
          id="autoSkipAds"
          handlerModal={createHandlerModal(["[object HTMLSpanElement]", "[object HTMLInputElement]"])}
          contentModal={<></>}>
          <Switch id="autoSkipAds"></Switch>
        </Item>
        <Item
          id="autoLike"
          handlerModal={createHandlerModal(["[object HTMLSpanElement]", "[object HTMLInputElement]"])}
          contentModal={
            <Item
              id="autoLike.Time"
            >
              <CounterInput id="autoLike.Time"></CounterInput>
            </Item>
          }>
          <Switch id="autoLike"></Switch>
        </Item>
      </div>
    </>
  )
}
