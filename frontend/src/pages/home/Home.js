import React from 'react'
import RecentPart from './sections/recentPart/RecentPart'
import FeaturePart from './sections/featurePart/FeaturePart'
import CountdownPart from './sections/countdownPart/CountdownPart'
import CollectedNew from './sections/collectedNew/CollectedNew'
import NichPart from './sections/nichPart/NichPart'
import NewPart from './sections/newsPart/NewPart'
export default function Home() {

  return (
    <>
      <RecentPart />
      <FeaturePart />
      <CountdownPart />
      <CollectedNew />
      <NichPart />
      <NewPart />
    </>
  )
}
