export interface User {
  uid?: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
  emailVerified?: boolean;
  state?:string;
  street?:string;
  website?:string;
  zipcode?:string;
  city?:string;
  phoneNumber?:string;
}
