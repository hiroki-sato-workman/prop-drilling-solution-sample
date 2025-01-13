import {commonInputStyle, componentContainerStyle, componentTitleStyle} from '~/classes';
import {useSetAtom} from 'jotai/index';
import {updateAddressAtom} from '~/atoms/userAtom';

type Props = {
  userId: string
  building: string
}

export default function BuildingInput({ userId, building }: Props) {
  const updateAddress = useSetAtom(updateAddressAtom)

  return (
    <div className={`${componentContainerStyle} border-emerald-300`}>
      <h5 className={componentTitleStyle}>BuildingInput</h5>
      <input
        className={`w-full ${commonInputStyle}`}
        defaultValue={building}
        onChange={(e) => updateAddress(
          {
            userId,
            target: 'building',
            newValue: e.target.value,
          })
        }
      />
    </div>
  )
}