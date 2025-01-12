import {commonInputStyle, componentContainerStyle, componentTitleStyle} from '~/classes';

type Props = {
  building: string
  onChangeBuilding: (newPrefecture: string) => void
}
export default function BuildingInput({ building, onChangeBuilding }: Props) {
  /**
   * 建物を変更したとき
   * @param e 入力イベント
   */
  const handleChangeInput = (e) => {
    onChangeBuilding(e.target.value)
  }

  return (
    <div className={`${componentContainerStyle} border-emerald-300`}>
      <h5 className={componentTitleStyle}>BuildingInput</h5>
      <input className={`w-full ${commonInputStyle}`} defaultValue={building} onChange={handleChangeInput}/>
    </div>
  )
}