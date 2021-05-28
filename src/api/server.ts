import React from 'react';

let token = '2d3bd9bff718eeeef8a4a9ed9ad31d911b967f7644e657f6';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://drone-inventory-nw.herokuapp.com/api/drones`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to featch data from the server')
        }
        return await response.json()
    },

    create: async(data:any = {}) => {
        const response = await fetch('https://drone-inventory-nw.herokuapp.com/api/drones', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to post new data to the server')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://drone-inventory-nw.herokuapp.com/api/drones/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to post new data to the server')
        }
    },

    delete: async (id: string) => {
        const response = await fetch(`https://drone-inventory-nw.herokuapp.com/api/drones/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}