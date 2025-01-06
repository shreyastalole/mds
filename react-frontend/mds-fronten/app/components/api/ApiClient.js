"use client";
import axios from 'axios'

export const apiClient = axios.create(
    {
        // baseURL: 'http://localhost:8080'
        baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"

    }
);
