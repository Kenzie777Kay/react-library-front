let token = '1868e2cd7dfea25b63c32fc5909033eddc1025fa22e7ecc8';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://windy-seed-party.glitch.me/api/books`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    create: async(data: any = {}) =>{
        const response = await fetch(`https://windy-seed-party.glitch.me/api/books`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
       
        })
        if (!response.ok){
            throw new Error('Failed to create new data on server')
        }

        return await response.json()
    },


    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://windy-seed-party.glitch.me/api/books/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        

    },
    delete: async(id:string) => {
        const response = await fetch(`https://windy-seed-party.glitch.me/api/books/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}