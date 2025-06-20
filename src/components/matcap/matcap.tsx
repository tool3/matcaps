/* eslint-disable react/no-unknown-property */
import useMatcaps from '~/hooks/use-matcaps'

export default function Matcap({
  defaultMatcap = 'matcap_16'
}: {
  defaultMatcap?: string
}) {
  const matcap = useMatcaps({
    name: 'matcap',
    defaultMatcap
  }) as any

  return <meshMatcapMaterial matcap={matcap.matcap} />
}
