import {UserType} from '~/user.type';
import UserTextDisplay from '~/routes/components/UserDisplay/UserTextDisplay';
import {useMemo} from 'react';

type Props = {
  user: UserType
}

export default function UserDisplay({ user }: Props) {
  const { id, firstName, lastName, dob, address } = user
  const { prefecture, city, town, building } = address

  const yearOfDob = useMemo(() => dob.split('-')[0], [dob])
  const monthOfDob = useMemo(() => dob.split('-')[1], [dob])
  const dayOfDob = useMemo(() => dob.split('-')[2], [dob])

  return (
    <div className="mt-5 border-2 border-emerald-700 border-solid rounded-xl p-3 mx-auto flex-col space-y-2">
      <h3 className="underline font-bold">UserDisplay</h3>
      <div>id: {id}</div>

      <div className="flex space-x-1">
        <UserTextDisplay text={lastName}/>
        <UserTextDisplay text={firstName}/>
      </div>

      <div className="flex space-x-1">
        <UserTextDisplay text={yearOfDob}/>年
        <UserTextDisplay text={monthOfDob}/>月
        <UserTextDisplay text={dayOfDob}/>日
      </div>

      <div className="flex space-x-1 flex-wrap">
        <UserTextDisplay text={prefecture}/>
        <UserTextDisplay text={city}/>
        <UserTextDisplay text={town}/>
        <UserTextDisplay text={building}/>
      </div>
    </div>
  )
}