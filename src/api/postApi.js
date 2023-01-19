import Axios from "axios"

const api = Axios.create({
	baseURL: "http://localhost:3001"
})


/* export const createUser = async (newUser) => {
	let res = await api.post("/andres", newUser)
	return res
} */