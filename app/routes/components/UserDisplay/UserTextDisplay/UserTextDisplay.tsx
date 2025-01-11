import {useEffect, useMemo, useRef, useState} from 'react';

type Props = {
  text: string
}

export default function UserTextDisplay({ text }: Props) {
  const textRef = useRef<string>(text)
  const [isChanged, setIsChanged] = useState<boolean>(false)

  const bgColor = useMemo(() => isChanged ? 'bg-teal-200 dark:bg-teal-600' : 'none', [isChanged])

  useEffect(() => {
    setIsChanged(text !== textRef.current)
  }, [text]);


  return (
    <div className={`px-1 rounded-lg ${bgColor}`}>
      {text}
    </div>
  )
}