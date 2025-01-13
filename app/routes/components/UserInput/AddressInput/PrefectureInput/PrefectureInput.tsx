import {commonInputStyle, componentContainerStyle, componentTitleStyle} from '~/classes';
import {updateAddressAtom, usersAtom} from '~/atoms/userAtom';
import {useAtom, useSetAtom} from 'jotai';
import {ChangeEvent} from 'react';
import {AddressType} from '~/user.type';
import {useUpdateUserInfo} from '~/utils/useUpdateUserInfo';

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
  userId: string
  prefecture: string
}

export default function PrefectureInput({ userId, prefecture }: Props) {
  const updateAddress = useSetAtom(updateAddressAtom)

  return (
    <div className={`${componentContainerStyle} border-emerald-300`}>
      <h5 className={componentTitleStyle}>PrefectureInput</h5>
      <select
        className={`w-full ${commonInputStyle}`}
        defaultValue={prefecture}
        onChange={(e) => updateAddress(
          {
            userId,
            target: 'prefecture',
            newValue: e.target.value,
          })
        }
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