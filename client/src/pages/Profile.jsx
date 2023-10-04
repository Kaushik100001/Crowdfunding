import React from 'react'
import { useState, useEffect } from 'react'
import { useStateContext } from '../context'
import DisplayCampaign from '../components/DisplayCampaign'

const Profile = () => {
  const [isLoading , setIsLoading] = useState(false)
  const [campaign , setCampaign] = useState([])
  const {contract , address , getUserCampaigns} = useStateContext() ;
  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaign(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);
   
  return (
    <DisplayCampaign
    title = "Your Campaigns"
    isLoading = {isLoading}
    campaign={campaign}
    />
    
  )
}

export default Profile