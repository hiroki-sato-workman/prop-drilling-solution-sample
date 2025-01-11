import {AddressType, NewUserInfoType, UserType} from '~/user.type';
import {Fragment, useState} from 'react';
import UserInput from 'app/routes/components/UserInput';

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
   *
   * @param updateUserId
   * @param newUserInfo
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
   *
   * @param updateUserId
   * @param newAddress
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
    <div className="container border-2 border-emerald-900 border-solid rounded-xl p-5 mx-auto flex space-x-5 mt-20 w-fit">
      <div>
        <h2>Main</h2>
        <pre className="mt-5 border bg-emerald-300 dark:bg-emerald-600">{JSON.stringify(users, null, 2)}</pre>
      </div>
      <div className="mt-11 flex space-x-5">
        {users.map((user) => {
          return (
            <Fragment key={user.id}>
              <UserInput user={user} onChangeUserInfo={handleChangeUserInfo} onChangeAddress={handleChangeAddress}/>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}