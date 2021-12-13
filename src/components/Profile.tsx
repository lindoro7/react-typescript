import React, { useState, useCallback } from 'react'
import { setConstantValue } from 'typescript'
import { useAppSelector, useAppDispatch } from '../store/hooks'

import { toggleShowName, CHANGE_NAME} from '../store/profile/actions'

export const Profile: React.FC = () => {
  const { name } = useAppSelector((state) => state.profile)
  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')

  const setShowName = useCallback(() => {
    dispatch(toggleShowName)
  }, [dispatch])

  const setName= useCallback(() => {
    dispatch({type: CHANGE_NAME, payload: value})
  }, [dispatch, value])

  const handleChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])
  return (
    <>
      <div>
        <h1>Profile component</h1>
      </div>
      <div>
        <input 
            type="text"
            value={value}
            onChange={handleChange}
          />
      </div>
      <div>
        <button>Change Name</button>
      </div>
    </>
  )
}