import {AddressType, NewUserInfoType, UserType} from '~/user.type';
import AddressInput from './AddressInput';
import {commonInputStyle, componentContainerStyle, componentTitleStyle} from '~/classes';

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
    <div className={`${componentContainerStyle} border-emerald-700`}>
      <h3 className={componentTitleStyle}>UserInput</h3>
      <div className="my-2">
        id: {user.id}
      </div>
      <div className="flex space-x-2">
        <input className={`w-3/12 ${commonInputStyle}`} defaultValue={user.lastName}
               onChange={(e) => handleChangeLastName(e.target.value)}/>
        <input className={`w-3/12 ${commonInputStyle}`} defaultValue={user.firstName}
               onChange={(e) => handleChangeFirstName(e.target.value)}/>
        <input className={`w-6/12 ${commonInputStyle}`} defaultValue={user.dob}
               onChange={(e) => handleChangeDob(e.target.value)} type="date"/>
      </div>
      <AddressInput user={user} onChangeAddress={onChangeAddress}/>
    </div>
  )
}