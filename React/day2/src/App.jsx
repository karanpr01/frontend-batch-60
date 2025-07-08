import React from 'react'
import Card from './card'

const App = () => {
  return (
    <div className='flex justify-center items-center container flex-wrap '>
    <Card title={"At least two children killed as passenger train rams school van at level crossing at Semmankuppam in T.N."} img={"https://th-i.thgim.com/public/incoming/6bol0g/article69786167.ece/alternates/LANDSCAPE_1200/cuddalore%20train%20accident%20"} desc={"The van belonging to a private CBSE school was attempting to cross the Railway Level Crossing Gate No. 170, (a non-interlocked manned gate) between Cuddalore and Alappakkam, when it was hit by Train No. 56813 Villupuram-Mayiladuthurai passenger.Four students have been injured and admitted to the Government Hospital, Cuddalore."}/>

     <Card title={"Accused In Bihar Businessman Gopal Khemka's Murder Case Killed In Encounter."} img={"https://c.ndtvimg.com/2025-07/mc1mojoo_gopal-khemka_625x300_05_July_25.jpeg?im=FitAndFill,algorithm=dnn,width=773,height=435"} desc={"An accused in the murder of businessman Gopal Khemka was killed in a police encounter last nightVikas, an accused, allegedly accompanied shooter Umesh during the murder outside Khemka's homeUmesh, the main shooter in the case, was arrested earlier by police in Patna"}/>

      <Card title={"Trump unveils 25% tariffs on South Korea and Japan; India eyes extended deadline"} img={"https://images.indianexpress.com/2025/07/donald-trump-3.jpg?w=640"} desc={"TWO DAYS before the reciprocal tariff pause runs out on July 9, President Donald Trump said on Monday that the US would impose 25% tariffs on imports from Japan and South Korea beginning August 1 as he unveiled the first two of what he has said will be a wave of letters to trading partners outlining the new levies they face.“If for any reason you decide to raise your tariffs, then, whatever the number you choose to raise them by, will be added onto the 25% that we charge,” Trump said in letters to the leaders of the two Asian countries, which he posted on his Truth Social platform.The rate for South Korea is the same that Trump initially announced on April 2, while the rate for Japan is 1 point higher than first announced. Trump capped all of the so-called reciprocal tariffs at 10% until July 9 to allow for negotiations. Only two agreements have so far been reached, with Britain and Vietnam.Meanwhile, amid uncertainty over the conclusion of an interim trade deal with India, the US has indicated that it may allow negotiations to continue until an extended deadline of August 1."}/>
    </div>
  )
}

export default App