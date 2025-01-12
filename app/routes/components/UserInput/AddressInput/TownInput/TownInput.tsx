import {commonInputStyle, componentContainerStyle, componentTitleStyle} from '~/classes';

type Props = {
  town: string
  onChangeTown: (newPrefecture: string) => void
}
export default function TownInput({ town, onChangeTown }: Props) {
  /**
   * 町を変更したとき
   * @param e 入力イベント
   */
  const handleChangeInput = (e) => {
    onChangeTown(e.target.value)
  }

  return (
    <div className={`${componentContainerStyle} border-emerald-300`}>
      <h5 className={componentTitleStyle}>TownInput</h5>
      <input className={`w-full ${commonInputStyle}`} defaultValue={town} onChange={handleChangeInput}/>
    </div>
  )
}