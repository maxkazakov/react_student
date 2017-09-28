import axios from "axios"

const API_HOST = "http://51.15.70.153:8080"

export const getUserInfo = () =>
	new Promise((resolve, reject) => {
		reject({ result: "error" })
	})
