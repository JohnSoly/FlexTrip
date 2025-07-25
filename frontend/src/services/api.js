const API_BASE_URL = 'http://localhost:3001';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Get stored token
  getToken() {
    return localStorage.getItem('token');
  }

  // Get stored user
  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // Set token and user
  setAuth(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Clear auth data
  clearAuth() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  // Check if user is authenticated
  isAuthenticated() {
    return !!this.getToken();
  }

  // Make authenticated request
  async authenticatedRequest(endpoint, options = {}) {
    const token = this.getToken();
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${this.baseURL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        ...options.headers,
      },
    });

    if (response.status === 401) {
      // Token expired or invalid
      this.clearAuth();
      window.location.href = '/login';
      throw new Error('Authentication expired');
    }

    return response;
  }

  // Authentication methods
  async signIn(email, password) {
    const response = await fetch(`${this.baseURL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    this.setAuth(data.access_token, data.employee);
    return data;
  }

  async signOut() {
    this.clearAuth();
  }

  // Country methods
  async getCountries() {
    const response = await this.authenticatedRequest('/country');
    return response.json();
  }

  async createCountry(countryData) {
    const response = await this.authenticatedRequest('/country', {
      method: 'POST',
      body: JSON.stringify(countryData),
    });
    return response.json();
  }


  // Employee methods
  async getEmployees() {
    const response = await this.authenticatedRequest('/employee');
    return response.json();
  }

  // Add more methods for other entities as needed...
}

export default new ApiService();