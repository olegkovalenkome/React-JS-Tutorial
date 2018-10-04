import React from 'react'
import {Link} from 'gatsby'
import Card from '../components/card'
import Section from '../components/section'
import Wave from '../components/wave'
import Cell from '../components/cell'
import staticdata from '../../staticdata.json'
import styled from "styled-components"

import Layout from '../components/layout'

const SectionCaption = styled.p`
font-weight: 600;
text-transform: uppercase;
font-size: 18px;
color: rgb(129, 139, 180);
text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 600px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (<Layout>
  <div className="Hero">
    <div className="HeroGroup">
      <h1>Learn to<br/>design and code React apps</h1>
      <p>Complete courses about the best tools for designers</p>
      <Link to="/page-2/">Watch this video</Link>
      <div className="Logos">
        <img src={require('../images/logo-sketch.png')} width="50"/>
        <img src={require('../images/logo-figma.png')} width="50"/>
        <img src={require('../images/logo-studio.png')} width="50"/>
        <img src={require('../images/logo-framer.png')} width="50"/>
        <img src={require('../images/logo-react.png')} width="50"/>
        <img src={require('../images/logo-swift.png')} width="50"/>
      </div>
      <Wave/>
    </div>
  </div>
  <div className="Cards">
    <h2>11 courses, more coming</h2>
    <div className="CardGroup">
      <Card title="React for Designers" text="12 sections" image={require('../images/wallpaper.jpg')}/>
      <Card title="React for Designers" text="12 sections" image={require('../images/wallpaper.jpg')}/>
      <Card title="React for Designers" text="12 sections" image={require('../images/wallpaper.jpg')}/>
      <Card title="React for Designers" text="12 sections" image={require('../images/wallpaper.jpg')}/>
      <Card title="React for Designers" text="12 sections" image={require('../images/wallpaper.jpg')}/>
      <Card title="React for Designers" text="12 sections" image={require('../images/wallpaper.jpg')}/>
    </div>
  </div>
  <Section image={require('../images/wallpaper2.jpg')} logo={require('../images/logo-react.png')} title="React for Designers" text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."/>

<SectionCaption>12 sections – 6 hours</SectionCaption>
  <SectionCellGroup>
    {staticdata.cells.map(cell => (<Cell title={cell.title} image={cell.image}/>))}
  </SectionCellGroup>

    </Layout>)

export default IndexPage
