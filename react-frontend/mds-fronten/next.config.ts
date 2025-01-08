import type { NextConfig } from "next";
import { apiClient } from "./app/components/api/ApiClient";

const nextConfig: NextConfig = {
  /* config options here */
  // serverRuntimeConfig: {
  //   apiUrl: process.env.NEXT_SERVER_API_URL
  // },
  // publicRuntimeConfig:{
  //   apiUrl: process.env.NEXT_PUBLIC_API_URL
  // }
};

export default nextConfig;
