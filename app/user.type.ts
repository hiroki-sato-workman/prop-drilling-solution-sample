export type AddressType ={
  prefecture: string;
  city: string;
  town: string;
  building: string;
}

export type UserType = {
  id: string;
  dob: string;
  firstName: string;
  lastName: string;
  address: AddressType,
}

export type NewUserInfoType = Pick<UserType, 'firstName' | 'lastName' | 'dob'>