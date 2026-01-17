import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/home/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "@/components/common/Card";
import { PropertyProps } from "@/interfaces";

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProperties = async()=> {
      try {
        const respone = await axios.get<PropertyProps[]>('/api/properties')
        setProperties(respone.data)
      }
      catch(error){
        console.error("Error fetching properties:", error);
      }
      finally{
        setLoading(false)
      }
    }
    fetchProperties()
  }, [])
  if(loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property}/>
        ))}
      </div>
    </div>
  );
}
