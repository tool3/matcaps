/* eslint-disable react/no-unknown-property */

import Glass from '~/components/glass/glass'
import Loader from '~/components/loader/loader'
import CanvasWithModel from '~/components/mincanvas/minicanvas'

export default function DisplayClock() {
  return (
    <>
      <Loader />
      <CanvasWithModel style={{ width: '100vw', height: '100svh' }}>
        <Glass />
      </CanvasWithModel>
    </>
  )
}
