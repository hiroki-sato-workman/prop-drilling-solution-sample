import {commonInputStyle, componentContainerStyle, componentTitleStyle} from '~/classes';
import {useSetAtom} from 'jotai/index';
import {updateAddressAtom} from '~/atoms/userAtom';

type Props = {
  userId: string
  city: string
}

export default function CityInput({ userId ,city }: Props) {
  const updateAddress = useSetAtom(updateAddressAtom)

  return (
    <div className={`${componentContainerStyle} border-emerald-300`}>
      <h5 className={componentTitleStyle}>CityInput</h5>
      <input
        className={`w-full ${commonInputStyle}`}
        defaultValue={city}
        onChange={(e) => updateAddress(
          {
            userId,
            target: 'city',
            newValue: e.target.value,
          })
        }
      />
    </div>
  )
}