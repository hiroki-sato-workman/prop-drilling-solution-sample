import {AddressType, NewUserInfoType, UserType} from '~/user.type';
import {Fragment, useState} from 'react';
import UserInput from 'app/routes/components/UserInput';
import UserDisplay from '~/routes/components/UserDisplay';

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
}, {
  id: '7777-8888-9999',
  dob: '2000-01-01',
  firstName: '花子',
  lastName: '佐藤',
  address: {
    prefecture: '福岡県',
    city: '中央区',
    town: '天神1-1-1',
    building: 'マンションB 201号室',
  }
}]

export default function Main() {
  const [users, setUsers] = useState(INITIAL_USER)

  /**
   * ユーザー情報を更新する
   * @param updateUserId 更新するユーザーid
   * @param newUserInfo 新しいユーザー情報
   */
  const handleChangeUserInfo = (updateUserId: string, newUserInfo: NewUserInfoType) => {
    setUsers((prevState) => {
      return prevState.map((prevUser: UserType) => {
        if (prevUser.id === updateUserId) {
          return {
            ...prevUser,
            ...newUserInfo,
          }
        }
        return prevUser
      })
    })
  }

  /**
   * 住所を更新する
   * @param updateUserId 更新するユーザーid
   * @param newAddress 新しい住所
   */
  const handleChangeAddress = (updateUserId: string, newAddress: AddressType) => {
    setUsers((prevState) => {
      return prevState.map((prevUser: UserType) => {
        if (prevUser.id === updateUserId) {
          return {
            ...prevUser,
            address: newAddress
          }
        }
        return prevUser
      })
    })
  }

  return (
    <div className="container border-2 border-emerald-900 border-solid rounded-xl p-5 mx-auto my-20 flex-col divide-y w-6/12 shadow-lg shadow-cyan-900">
        <h2 className="underline font-bold">Main</h2>
        {users.map((user) => {
          return (
            <div key={user.id} className="mt-5 space-y-3">
              <UserDisplay user={user}/>
              <UserInput user={user} onChangeUserInfo={handleChangeUserInfo} onChangeAddress={handleChangeAddress}/>
            </div>
          )
        })}
    </div>
  )
}