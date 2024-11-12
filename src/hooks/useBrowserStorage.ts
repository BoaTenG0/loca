'use client'

import { useState } from 'react'
import { userDataCrypt } from './userDataCrypt'

type StorageType = 'local' | 'session'
const getStorageKey = (key: string) => `G&&%bvs5dfd756^%^n$${key}`

//const {storedValues, getValue, setValue, removeValue} = useBrowserStorage("local")
//setValue('key', 'value')
//getValue('key')
//removeValue('key')
//storedValues([...key])

export const useBrowserStorage = <T extends string>(storageType: StorageType) => {
  const [storedValues, setStoredValues] = useState<{ [key: string]: T | undefined | null }>({})

  const isClient = typeof window !== 'undefined'

  const getValue = (key: string): T | undefined => {
    if (!isClient) return undefined

    const storageKey = getStorageKey(key)
    const storedData = storageType === 'local' ? localStorage.getItem(storageKey) : sessionStorage.getItem(storageKey)

    if (storedData) {
      const decryptedData = userDataCrypt('decrypt', key, storedData)
      return decryptedData as T
    }
    return undefined
  }

  const setValue = (key: string, value: T) => {
    if (!isClient) return

    const storageKey = getStorageKey(key)
    const encryptedValue = userDataCrypt('encrypt', key, value)

    if (storageType === 'local') {
      localStorage.setItem(storageKey, encryptedValue as string)
    } else {
      sessionStorage.setItem(storageKey, encryptedValue as string)
    }

    setStoredValues((prev) => ({ ...prev, [key]: value }))
  }
}
