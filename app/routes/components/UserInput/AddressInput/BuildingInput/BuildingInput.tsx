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
    <div className="mt-3 border-2 border-emerald-300 border-solid rounded-xl p-3 mx-auto flex-col space-y-2">
      <h5>BuildingInput</h5>
      <input defaultValue={building} onChange={handleChangeInput}/>
    </div>
  )
}