/* eslint-disable react/no-unknown-property */
import useMatcaps from '~/hooks/use-matcaps'

export default function Matcap() {
  const matcap = useMatcaps({
    name: 'matcap',
    defaultMatcap: `matcap_16`
  }) as any

  return <meshMatcapMaterial matcap={matcap.matcap} />
}
