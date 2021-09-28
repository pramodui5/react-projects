import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {
  const {waiting,Loading,questions,index,correct} = useGlobalContext()

  if ( waiting ){
    return <SetupForm />
  }
  if ( Loading ) {
    return <Loading />
  }
  return (
    <main>
      Quiz app
    </main>
  )
}

export default App