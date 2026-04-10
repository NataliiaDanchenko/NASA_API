import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const myKey = '9PW48ezQ7aa0gK9SWPQQ20mFgCEs4cldZ9fSxv2u&';

export const nasaApi = createApi({
    reducerPath: 'nasaApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://api.nasa.gov/planetary/apod?api_key=${myKey}` }),
    keepUnusedDataFor: 0,
    endpoints: (build) => ({
        getNasa: build.query({
            query: () => `https://api.nasa.gov/planetary/apod?api_key=${myKey}`
        }),
        getNasaRandom: build.query({
            query: (dateFormat) => `https://api.nasa.gov/planetary/apod?api_key=${myKey}date=${dateFormat}`
        }),
    /* transformRespons: (response: ServerResponse) => response.items */ 
           
            /*getRandomNasa: build.fetchBaseQuery({
                baseUrl: `https://api.nasa.gov/planetary/apod?api_key=9PW48ezQ7aa0gK9SWPQQ20mFgCEs4cldZ9fSxv2u&date=2022-03-09` 
                
                query: () => ({
                    url: `https://api.nasa.gov/planetary/apod?api_key=9PW48ezQ7aa0gK9SWPQQ20mFgCEs4cldZ9fSxv2u&date=2022-03-09`,
                    method: 'GET',
                   
                }),*/
     
    })
});
/*const randomDate = (start, end) => {//
    const myDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const dateFormat = myDate.toLocaleDateString('en-ca');
    console.log(dateFormat)
}*/

export const {useGetNasaQuery, useLazyGetNasaRandomQuery} = nasaApi