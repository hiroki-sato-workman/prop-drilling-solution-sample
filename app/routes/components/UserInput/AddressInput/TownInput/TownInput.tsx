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
    <div className="mt-3 border-2 border-emerald-300 border-solid rounded-xl p-3 mx-auto flex-col space-y-2">
      <h5 className="underline font-bold">TownInput</h5>
      <input className="w-full p-2 rounded-lg border border-teal-200 bg-teal-50 dark:bg-teal-950" defaultValue={town} onChange={handleChangeInput}/>
    </div>
  )
}