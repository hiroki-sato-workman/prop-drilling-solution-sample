
import { atom } from 'jotai'
import {AddressType, UserType} from '~/user.type';

const INITIAL_USER: UserType[] = [{
  id: '1111-2222-3333',
  dob: '2000-01-01',
  firstName: '太郎',
  lastName: '山田',
  address: {
    prefecture: '東京都',
    city: '千代田区',
    town: '千代田1-1-1',
    building: 'マンションA 101号室',
  }
}]

type UpdateAddressAtomType = {
  userId: string
  target: keyof AddressType
  newValue: string
}

type UpdateUserInfoType = {
  userId: string
  target: keyof Omit<UserType, 'address'>
  newValue: string
}

export const usersAtom = atom<UserType[]>(INITIAL_USER)

/**
 * 住所を更新するアトム
 */
export const updateAddressAtom = atom(
  null,
  (get, set, { userId, target, newValue }: UpdateAddressAtomType) => {
    const users = get(usersAtom)
    const user = users.find((u) => u.id === userId)
    if (!user) return

    const newAddress: AddressType = {
      ...user.address,
      [target]: newValue,
    }

    set(
      usersAtom,
      users.map((user) =>
        user.id === userId
          ? {
            ...user,
            address: newAddress,
          }
          : user
      )
    )
  }
)

/**
 * ユーザー情報を更新するアトム
 */
export const updateUserInfoAtom = atom(
  null,
  (get, set, { userId, target, newValue }: UpdateUserInfoType) => {
    const users = get(usersAtom)
    const user = users.find((u) => u.id === userId)
    if (!user) return

    const newUserInfo: UserType = {
      ...user,
      [target]: newValue,
    }

    set(
      usersAtom,
      users.map((user) =>
        user.id === userId
          ? newUserInfo
          : user
      )
    )
  }
)
