// Configuration file for environment variables
export const config = {
  // WebSocket server URL
  socketUrl: process.env.NEXT_PUBLIC_SOCKET_URL || 'https://scorelens-backend.onrender.com',
  
  // API base URL
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://scorelens-backend.onrender.com',
  
  // Environment
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
};
