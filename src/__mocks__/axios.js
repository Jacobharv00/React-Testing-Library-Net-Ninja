const mockResponse = {
	data: {
		results: [
			{
				name: {
					first: "Jacob",
					last: "Harvey"
				},
				picture: {
					large: "https://randomuser.me/api/portraits/men/59.jpg"
				},
				login: {
					username: "TheGOAT"
				}
			}
		]
	}
}

export default {
	get: jest.fn().mockResolvedValue( mockResponse )
}
