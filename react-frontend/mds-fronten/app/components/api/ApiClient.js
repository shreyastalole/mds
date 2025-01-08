// "use client";
import axios from 'axios'
import getConfig from 'next/config';


export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store'
// const {serverRuntimeConfig,publicRuntimeConfig} = getConfig();


const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
// const apiUrl = serverRuntimeConfig.apiUrl || publicRuntimeConfig.apiUrl
console.log("API URL being used:", apiUrl); // Logs the value of API URL to the console

export const apiClient = axios.create({
    baseURL: apiUrl,
    // headers:{
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json"
    // }
});

