"use client";
import axios from 'axios'

export const apiClient = axios.create(
    {
        // baseURL: 'http://localhost:8080'
        baseURL: 'https://humble-guide-x5jrgwv7gj4hpwv6-8080.app.github.dev'
    }
);
