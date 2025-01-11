const prefectures = [
  '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
  '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
  '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県',
  '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県',
  '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県',
  '徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県',
  '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
];

type Props = {
  prefecture: string
  onChangePrefecture: (newPrefecture: string) => void
}

export default function PrefectureInput({ prefecture, onChangePrefecture }: Props) {
  /**
   * 県を変更したとき
   * @param e 入力イベント
   */
  const handleChangeInput = (e) => {
    onChangePrefecture(e.target.value)
  }

  return (
    <div className="mt-3 border-2 border-emerald-300 border-solid rounded-xl p-3 mx-auto flex-col space-y-2">
      <h5 className="underline font-bold">PrefectureInput</h5>
      <select
        className="w-full p-2 rounded-lg border border-teal-200 bg-teal-50 dark:bg-teal-950"
        defaultValue={prefecture}
        onChange={handleChangeInput}
      >
        <option value="">--選択してください--</option>
        {prefectures.map((prefecture) => (
          <option key={prefecture} value={prefecture}>
            {prefecture}
          </option>
        ))}
      </select>
    </div>
  )
}