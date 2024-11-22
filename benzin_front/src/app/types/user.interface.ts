
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  profilePicture: string | null;
  voitures: Car[];
  encheres: Bid[];
}
export interface Bid {
  id: number;
  montant: number;
  encherisseur: User;
  voiture: Car;
  createdAt: Date;
}
export interface Car {
  id: number;
  marque: string;
  modele: string;
  annee: number;
  kilometrage: string;
  moteur: string;
  carburant: string;
  cylindree: string;
  puissance: string;
  boite: string;
  couleur: string;
  vendeur: User;
  photo: string;
  encheres: Bid[];
}
export interface userRequest {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  profilePicture: string | null;
  favoriteRestaurants: number[];
}
