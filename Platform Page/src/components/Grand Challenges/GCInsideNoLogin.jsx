import React from 'react'
import { data } from './InsideDataNoLogin'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

export default function GCInsideNoLogin() {
  return (
    <>
    <section className='title-challenge'>
        (Challenge Title)
    </section>
    <div className='second-div'>
        <div><a href=""> Go Back </a></div>
        <div><button className='gc-button'>Discussions</button></div>
    </div>
    <div className='flex items-center justify-center h-20 font-bold '>
        (Challenge title from db)
    </div>
    <div className='flex flex-wrap items-center justify-between mb-16 mr-10 ml-10'>
        <div><b>Sector:</b> (from db) </div>
        <div><b>Keywords:</b> (from db) </div>
        <div><b>Followed by :</b> (from db) </div>
    </div>
    <div className='tabs-gc'>
    <Tabs id="custom-animation" value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
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
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
    </>
  )
}
