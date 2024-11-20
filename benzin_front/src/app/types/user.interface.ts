
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  profilePicture: string | null;
}

export interface userRequest {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  profilePicture: string | null;
  favoriteRestaurants: number[];
}
