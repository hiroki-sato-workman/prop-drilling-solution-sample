import {AddressType, UserType} from '~/user.type';
import PrefectureInput from './PrefectureInput';
import CityInput from './CityInput';
import TownInput from './TownInput';
import BuildingInput from './BuildingInput';
import {componentContainerStyle, componentTitleStyle} from '~/classes';

type Props = {
  user: UserType
  onChangeAddress: (updateUserId: string, newAddress: AddressType) => void
}
export default function AddressInput({ user, onChangeAddress }: Props) {
  const { id , address } = user
  const { prefecture, city, town, building } = address

  /**
   * 住所を更新する
   * @param newAddress 新しい住所
   */
  const handleChangeAddress = (newAddress: AddressType) => {
    onChangeAddress(id, newAddress)
  }

  /**
   * 県を更新する
   * @param newPrefecture 新しい県
   */
  const handleChangePrefecture = (newPrefecture: string) => {
    handleChangeAddress({
      ...address,
      prefecture: newPrefecture,
    })
  }

  /**
   * 市を更新する
   * @param newCity 新しい市
   */
  const handleChangeCity = (newCity: string) => {
    handleChangeAddress({
      ...address,
      city: newCity,
    })
  }

  /**
   * 町を更新する
   * @param newTown 新しい町
   */
  const handleChangeTown = (newTown: string) => {
    handleChangeAddress({
      ...address,
      town: newTown,
    })
  }

  /**
   * 建物を更新する
   * @param newBuilding 新しい建物
   */
  const handleChangeBuilding = (newBuilding: string) => {
    handleChangeAddress({
      ...address,
      building: newBuilding,
    })
  }

  return (
    <div className={`${componentContainerStyle} border-emerald-500`}>
      <h4 className={componentTitleStyle}>AddressInput</h4>
      <div className="space-y-3">
        <PrefectureInput onChangePrefecture={handleChangePrefecture} prefecture={prefecture}/>
        <CityInput onChangeCity={handleChangeCity} city={city}/>
        <TownInput onChangeTown={handleChangeTown} town={town}/>
        <BuildingInput onChangeBuilding={handleChangeBuilding} building={building}/>
      </div>
    </div>
  )
}