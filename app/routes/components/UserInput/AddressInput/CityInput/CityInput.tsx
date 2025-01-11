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
    <div className="mt-3 border-2 border-emerald-300 border-solid rounded-xl p-3 mx-auto flex-col space-y-2">
      <h5>CityInput</h5>
      <input defaultValue={city} onChange={handleChangeInput}/>
    </div>
  )
}