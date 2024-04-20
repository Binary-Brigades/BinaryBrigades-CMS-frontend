import React, { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Homepage/Hero'
import useAuthToken from '../hooks/useAuth'

function Homepage() {
    const { getItem } = useAuthToken();
  const token = getItem();
  useEffect(() => {
    if (!token) {
      window.location.href = "/Login";
    }
  }, []);
  return (
    <div>
      <Header />
      <Hero />
    </div>
  )
}

export default Homepage