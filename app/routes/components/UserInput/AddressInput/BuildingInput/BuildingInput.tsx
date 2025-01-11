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
      <h5 className="underline font-bold">BuildingInput</h5>
      <input className="w-full p-2 rounded-lg border border-teal-200 bg-teal-50 dark:bg-teal-950" defaultValue={building} onChange={handleChangeInput}/>
    </div>
  )
}