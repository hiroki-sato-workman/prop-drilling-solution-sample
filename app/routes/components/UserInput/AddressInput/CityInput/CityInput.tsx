import {commonInputStyle, componentContainerStyle, componentTitleStyle} from '~/classes';

type Props = {
  city: string
  onChangeCity: (newPrefecture: string) => void
}
export default function CityInput({ city, onChangeCity }: Props) {
  /**
   * 市を変更したとき
   * @param e 入力イベント
   */
  const handleChangeInput = (e) => {
    onChangeCity(e.target.value)
  }

  return (
    <div className={`${componentContainerStyle} border-emerald-300`}>
      <h5 className={componentTitleStyle}>CityInput</h5>
      <input className={`w-full ${commonInputStyle}`} defaultValue={city} onChange={handleChangeInput}/>
    </div>
  )
}