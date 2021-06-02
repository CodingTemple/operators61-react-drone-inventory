import React from 'react';

let token = '5f2b21ef2f0aa6fed0b33a3a36e8b2b221975bb33223c410';

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
            throw new Error('Failed to fetch data from the server')
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