const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			user: [
				{}
			]
		},
		actions: {
			getMessage: async () => {
				try{
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},	
			login: async (email, password) => {
                try {
                    const resp = await fetch("https://friendly-halibut-wr75gwjvq4p7f9grw-3001.app.github.dev/api/login", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
							'Access-Control-Allow-Origin':'*'
                        },
                        body: JSON.stringify({ email, password }),
                    });

                    if (resp.ok) {
						const data = await resp.json();
			
						const updatedUserList = getStore().user.map(u => {
							if (u.email === data.email) {
								return { ...u, is_active: true };
							}
							return u;
						});
					
						setStore({ user: updatedUserList });
						setStore({ isAuthenticated: true });
					
						return data;
					}else {
                        const errorData = await resp.json();
                        console.error('Error en la autenticación:', errorData);
                    }
                } catch (error) {
                    console.log("Error en la autenticación:", error);
                }
            },
			createUser : async (email, password) => {
				try {
					const resp = await fetch("https://friendly-halibut-wr75gwjvq4p7f9grw-3001.app.github.dev/api/signup", {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							'Access-Control-Allow-Origin':'*'
						},
						body: JSON.stringify({ email, password }),
					});
			
					if (resp.ok) {
						const data = await resp.json();
						return data;
					} else {
						const errorData = await resp.json();
						console.error('Error al crear usuario:', errorData);
						throw new Error('Error al crear usuario');
					}
				} catch (error) {
					console.log("Error al crear usuario:", error);
					throw error;
				}
			}
		}
	};
};

export default getState;
