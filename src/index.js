import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Auth from "./components/Auth"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import registerServiceWorker from "./registerServiceWorker"
import getStore from "./store"

const store = getStore({})

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Auth />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
)
registerServiceWorker()
