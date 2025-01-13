import {AddressType, UserType} from '~/user.type';
import PrefectureInput from './PrefectureInput';
import CityInput from './CityInput';
import TownInput from './TownInput';
import BuildingInput from './BuildingInput';
import {componentContainerStyle, componentTitleStyle} from '~/classes';

type Props = {
  user: UserType
}

export default function AddressInput({ user }: Props) {
  const { prefecture, city, town, building } = user.address

  return (
    <div className={`${componentContainerStyle} border-emerald-500`}>
      <h4 className={componentTitleStyle}>AddressInput</h4>
      <div className="space-y-3">
        <PrefectureInput userId={user.id} prefecture={prefecture} />
        <CityInput userId={user.id} city={city}/>
        <TownInput userId={user.id} town={town}/>
        <BuildingInput userId={user.id} building={building}/>
      </div>
    </div>
  )
}