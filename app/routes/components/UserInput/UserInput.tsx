import {AddressType, NewUserInfoType, UserType} from '~/user.type';
import AddressInput from './AddressInput';

type Props = {
  user: UserType
  onChangeUserInfo: (updateUserId: string, userInfo: NewUserInfoType) => void
  onChangeAddress: (updateUserId: string, newAddress: AddressType) => void
}

export default function UserInput({ user, onChangeUserInfo, onChangeAddress }: Props) {
  const { id, firstName, lastName, dob } = user

  /**
   * ユーザ情報を更新する
   * @param newUserInfo 新しいユーザー情報
   */
  const handleChangeUserInfo = (newUserInfo: NewUserInfoType) => {
    onChangeUserInfo(id, newUserInfo)
  }

  /**
   * 名前を更新する
   * @param newFirstName 新しい名前
   */
  const handleChangeFirstName = (newFirstName: string) => {
    handleChangeUserInfo({
      firstName: newFirstName,
      dob,
      lastName,
    })
  }

  /**
   * 性を更新する
   * @param newLastName 新しい性
   */
  const handleChangeLastName = (newLastName: string) => {
    handleChangeUserInfo({
      firstName,
      dob,
      lastName: newLastName,
    })
  }

  /**
   * 生年月日を更新する
   * @param newDob 新しい生年月日
   */
  const handleChangeDob = (newDob: string) => {
    handleChangeUserInfo({
      firstName,
      dob: newDob,
      lastName,
    })
  }

  return (
    <div className="border-2 border-emerald-700 border-solid rounded-xl p-5 flex-col h-fit">
      <h3>UserInput</h3>
      <div className="my-2">
        id: {user.id}
      </div>
      <div className="flex space-x-2">
        <input className="w-20 my-2" defaultValue={user.lastName} onChange={(e) => handleChangeLastName(e.target.value)}/>
        <input className="w-20 my-2" defaultValue={user.firstName} onChange={(e) => handleChangeFirstName(e.target.value)}/>
        <input className="w-28 my-2" defaultValue={user.dob} onChange={(e) => handleChangeDob(e.target.value)} type="date" />
      </div>
      <AddressInput user={user} onChangeAddress={onChangeAddress}/>
    </div>
  )
}