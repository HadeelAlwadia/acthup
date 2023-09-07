import React, { FC } from 'react'

interface IPageProps {
  loading?: boolean
  children: React.ReactNode
}
const Page: FC<IPageProps> = ({ loading = false, children }) => {
  if (loading) {
    return <>loading</>
  }

  return <>{children}</>
}

export default Page
