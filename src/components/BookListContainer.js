import React, {useEffect, useState} from 'react'
import BookList from './BookList'
import axios from 'axios'
import { useRemoteService } from '../hooks/useRemoteService'

function BookListContainer() {
  const {data, loading, error} = useRemoteService([])
  return (
    <BookList loading={loading} error={error} books={data} />

  )
}

export default BookListContainer
