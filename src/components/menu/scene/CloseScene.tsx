import React from 'react'
import { Button } from 'dracula-ui'
import { useRecoilState, useRecoilValue } from 'recoil'
import { SceneFile } from '../../../model/SceneFile'
import { useNotification } from '../../../hooks/useNotification'
import { SceneMeta, sceneMetaState } from '../../../model/SceneMeta'
import { isSceneOpenState, sceneState } from '../../../state/SceneState'

interface Props {}

const CloseScene = ({}: Props): JSX.Element => {
  const [_1, setScene] = useRecoilState(sceneState)
  const [_2, setSceneMeta] = useRecoilState(sceneMetaState)
  const notify = useNotification()
  const isSceneOpen = useRecoilValue(isSceneOpenState)

  const closeScene = () => {
    setScene(SceneFile.default())
    setSceneMeta(SceneMeta.default())

    notify.success('Scene closed')
  }

  return (
    <div>
      <Button size="xs" color="purple" disabled={!isSceneOpen} onClick={closeScene}>
        Close
      </Button>
    </div>
  )
}

export default CloseScene
