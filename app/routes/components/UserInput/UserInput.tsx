import {UserType} from '~/user.type';
import AddressInput from './AddressInput';
import {commonInputStyle, componentContainerStyle, componentTitleStyle} from '~/classes';
import {updateUserInfoAtom} from '~/atoms/userAtom';
import {useSetAtom} from 'jotai/index';

type Props = {
  user: UserType
}

export default function UserInput({ user }: Props) {
  const updateUserInfo = useSetAtom(updateUserInfoAtom)
  const { id: userId, lastName, firstName, dob} = user

  return (
    <div className={`${componentContainerStyle} border-emerald-700`}>
      <h3 className={componentTitleStyle}>UserInput</h3>
      <div className="my-2">
        id: {userId}
      </div>

      {/* ユーザー情報入力欄*/}
      <div className="flex space-x-2">
        <input
          className={`w-3/12 ${commonInputStyle}`} defaultValue={lastName}
          onChange={(e) => updateUserInfo({
            userId,
            target: 'lastName',
            newValue: e.target.value,
          })}
        />
        <input
          className={`w-3/12 ${commonInputStyle}`} defaultValue={firstName}
          onChange={(e) => updateUserInfo({
            userId,
            target: 'firstName',
            newValue: e.target.value,
          })}
        />
        <input
          className={`w-6/12 ${commonInputStyle}`} defaultValue={dob}
          onChange={(e) => updateUserInfo({
            userId,
            target: 'dob',
            newValue: e.target.value,
          })}
          type="date"
        />
      </div>

      {/* 住所入力欄 */}
      <AddressInput user={user}/>
    </div>
  )
}