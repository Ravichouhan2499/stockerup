import React from 'react'
import About from '../../component/aboutComponent/about'
import Model from '../../component/modelComponent/model'
import MileStone from '../../component/mileStoneComponent/mileStone'
import Service from '../../component/serviceComponent/service'
import Team from '../../component/teamComponent/team'
import Blog from '../../component/blogComponent/blog'
import ContactUs from '../../component/contactComponent/contact'

export default function Home() {
  return (
    <div>
      <About/>
      <Service/>
      <Model/>
      <Team/>
      <MileStone/>
      <Blog/>
      <ContactUs/>

    </div>
  )
}
