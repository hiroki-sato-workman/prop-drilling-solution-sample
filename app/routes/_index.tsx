import UserInput from 'app/routes/components/UserInput';
import UserDisplay from '~/routes/components/UserDisplay';
import {componentContainerStyle} from '~/classes';
import {usersAtom} from '~/atoms/userAtom';
import {useAtom} from 'jotai';

export default function Main() {
  const [users] = useAtom(usersAtom)

  return (
    <div className={`${componentContainerStyle} container border-emerald-900 mx-auto my-5 md:my-20 w-11/12 md:w-6/12 shadow-lg shadow-teal-900 space-y-5`}>
      <h2 className="underline font-bold">Main</h2>
      {users.map((user) => {
        return (
          <div key={user.id} className="mt-5 space-y-5">
            {/* ユーザー情報表示 */}
            <UserDisplay user={user}/>
            {/* ユーザー情報入力 */}
            <UserInput user={user}/>
          </div>
        )
      })}
    </div>
  )
}