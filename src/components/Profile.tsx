import React, { useCallback } from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks'

import { toggleShowName } from '../store/profile/actions'

export const Profile: React.FC = () => {
  const { showName, name } = useAppSelector((state) => state.profile)
  const dispatch = useAppDispatch()

  const setShowName = useCallback(() => {
    dispatch(toggleShowName)
  }, [dispatch])
  return (
    <div>
      <h1>Profile component</h1>
      <input 
           type="checkbox"
           checked={showName}
           value={Number(showName)}
           onChange={setShowName}
        />
      <span>Show Name</span>
      {showName && <div>{name}</div>}
    </div>
  )
}