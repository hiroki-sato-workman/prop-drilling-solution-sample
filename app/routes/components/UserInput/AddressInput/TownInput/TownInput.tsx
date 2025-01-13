import {commonInputStyle, componentContainerStyle, componentTitleStyle} from '~/classes';
import {useSetAtom} from 'jotai/index';
import {updateAddressAtom} from '~/atoms/userAtom';

type Props = {
  userId: string
  town: string
}

export default function TownInput({ userId, town }: Props) {
  const updateAddress = useSetAtom(updateAddressAtom)

  return (
    <div className={`${componentContainerStyle} border-emerald-300`}>
      <h5 className={componentTitleStyle}>TownInput</h5>
      <input
        className={`w-full ${commonInputStyle}`}
        defaultValue={town}
        onChange={(e) => updateAddress(
          {
            userId,
            target: 'town',
            newValue: e.target.value,
          })
        }
      />
    </div>
  )
}