import React from 'react'
import { useState, useEffect } from 'react'
import { useStateContext } from '../context'
import DisplayCampaign from '../components/DisplayCampaign'

const Home = () => {
  const [isLoading , setIsLoading] = useState(false)
  const [campaign , setCampaign] = useState([])
  const {contract , address , getCampaigns} = useStateContext() ;
  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaign(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);
   
  return (
    <DisplayCampaign
    title = "All Campaigns"
    isLoading = {isLoading}
    campaign={campaign}
    />
    
  )
}

export default Home