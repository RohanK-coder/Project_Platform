import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Tabs,
  TabsBody,
  Tab,
  TabPanel,
  TabsHeader,
} from "@material-tailwind/react";

export default function GCPageInsideLogin() {
  const { id } = useParams();
  const [challengeData, setChallengeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data for the specific challenge based on the id parameter
    axios.get(`http://localhost:8000/api/details/${id}`)
      .then(response => {
        setChallengeData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching challenge data:', error);
        setError(error.message || 'Error loading challenge data');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Predefined array for tabs
  const tabsArray = [
    { label: 'Challenge Content', value: 'content', desc: challengeData.cc },
    { label: 'Challenge Details', value: 'details', desc: challengeData.cd },
    { label: 'Impact', value: 'impact', desc: challengeData.impact },
    { label: 'Village', value: 'village', desc: challengeData.village },
    { label: 'References', value: 'reference', desc: challengeData.reference },
    { label: 'Express Interest', value: 'express', desc: challengeData.express }
  ];

  return (
    <>
      <section className='title-challenge'>
        {challengeData.title}
      </section>
      
      <div className='second-div'>
        <div><a href=""> Go Back </a></div>
        <div><button className='gc-button'>Discussions</button></div>
      </div>

      <div className='flex items-center justify-center h-20 font-bold '>
        {challengeData.title}
      </div>

      <div className='flex flex-wrap items-center justify-between mb-16 mr-10 ml-10'>
        <div><b>Sector:</b> {challengeData.sector}</div>
        <div><b>Keywords:</b> {challengeData.keywords}</div>
        <div><b>Followed by :</b> {challengeData.followedBy}</div>
      </div>

      <div className='tabs-gc'>
        {tabsArray.length > 0 && (
          <Tabs id="custom-animation" value={id}>
            <TabsHeader>
            {tabsArray.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              {tabsArray.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        )}
      </div>
    </>
  );
}
