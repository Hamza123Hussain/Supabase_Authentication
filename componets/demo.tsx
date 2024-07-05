'use client'

import { createClient } from '@/utils/supabase/client'
import React, { useEffect, useState } from 'react'

const Demo = () => {
  const [user, setuser] = useState<any>()
  useEffect(() => {
    const getuser = async () => {
      const supabase = createClient()
      const { data, error } = await supabase.auth.getUser()

      if (error || !data?.user) {
        console.log('no user')
      }
      setuser(data.user)
    }
    getuser()
  }, [])
  console.log(user)
  return (
    <div className=" flex-col flex">
      {' '}
      client componet {user?.email} {user?.role}
    </div>
  )
}

export default Demo
