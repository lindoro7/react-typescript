import React from 'react'

interface IPaginationProps {
  length: number
}

export const Pagination: React.FC<IPaginationProps> = ({length}) => {
  const perPage = 5
  const pages = Math.ceil(length/perPage)


  if(length <= perPage) {
    return <p className="center">На странице { length } сообщений</p>
  }

  return (
    <ul className="pagination center">
      <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
      <li className="waves-effect active"><a href="#!">1</a></li>
      <li className="waves-effect"><a href="#!">2</a></li>
      <li className="waves-effect"><a href="#!">3</a></li>
      <li className="waves-effect"><a href="#!">4</a></li>
      <li className="waves-effect"><a href="#!">5</a></li>
      <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
    </ul>
  )
}