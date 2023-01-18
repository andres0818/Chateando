import Axios from "axios"

const api = Axios.create({
	baseURL: "http://localhost:3001"
})

export const getUsers = async () => {
	let res = await api.get("/user")
	return res
}

export const createUser = async (newUser) => {
	let res = await api.post("/users", newUser)
	return res
}