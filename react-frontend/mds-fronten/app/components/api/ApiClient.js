"use client";
import axios from 'axios'
import {env} from 'next-runtime-env'

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store'

const apiUrl = env('NEXT_PUBLIC_API_URL') || 'http://localhost:8080'
// const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

console.log("API URL being used:", apiUrl); // Logs the value of API URL to the console

export const apiClient = axios.create({
    baseURL: apiUrl
});

