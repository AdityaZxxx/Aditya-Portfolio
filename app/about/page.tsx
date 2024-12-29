'use client'

import Footer from '@/components/Footer'
import { Timeline } from '@/components/ui/timeline'
// import Image from 'next/image'

const timelineDataAbout = [
  {
    title: 'About Me.',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          The power of first impressions cannot be underestimated, and the gateway to capitalizing
          on them lies in exceptional website design. An outstanding website transcends mere
          aesthetics and extends its influence to encompass seamless functionality and user-friendly
          navigation. Drawing upon my expertise as a seasoned programmer, I possess the unique
          ability to tackle intricate technical challenges while crafting websites that exude
          sleekness and visual allure. Moreover, my extensive knowledge of recognized technical
          standards is complemented by my proficiency in modern building practices, ensuring that
          every aspect of your website is finely tuned to perfection.
        </p>
      </div>
    ),
  },
  {
    title: 'Product',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          While I may not fit the conventional mold of a product manager, my diverse skill set in
          research, product design, and product coordination empowers me to drive the growth of a
          product from its inception. As an exceptional analytical thinker, I possess the ability to
          uphold the product&apos;s vision throughout its entire journey, effectively bridging the
          technical and product aspects. By leveraging my expertise, I can navigate the path from 0
          to 1, ensuring the product&apos;s success at every stage.
        </p>
      </div>
    ),
  },
  {
    title: 'Design',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Despite not fitting the typical designer stereotype, my exceptional visual abilities
          enable me to excel as a presenter, effectively conveying design concepts to stakeholders
          and design teams. I possess a remarkable aptitude for conceptualization, allowing me to
          envision and bring forth stunning creations. Additionally, my expertise lies in
          fine-tuning stylesheets and crafting seamless user experiences that flow effortlessly.
        </p>
      </div>
    ),
  },
]

const timelineDataMyReads = [
  {
    title: 'My Reads.',
    content: (
      <div>
        <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm space-y-4">
          <li>
            <strong>Human Centered Design 101. Acumen 2017 - 2018:</strong> This is an intensive,
            hands-on learning experience that will challenge you to get out of your chair and out
            into the real world to talk to people and test your ideas.
          </li>
          <li>
            <strong>Data Structure And Algorithm. Udemy 2019:</strong> Many developers who are
            &quot;self taught&quot; feel that one of the main disadvantages they face compared to
            college educated graduates in computer science is the lack of knowledge about algorithms
            and data structures.
          </li>
          <li>
            <strong>Adaptive Leadership. edX 2019:</strong> This introductory course helps you
            identify and make progress on a leadership challenge in your own life, team, or
            community.
          </li>
          <li>
            <strong>Learning to Learn [Efficient Learning] Udemy 2020:</strong> Improve memory &
            productivity using the skills of the world&apos;s top performers and research-backed
            strategies.
          </li>
        </ul>
      </div>
    ),
  },
]

const timelineDataMyPlaylist = [
  {
    title: 'My Playlist.',
    content: (
      <div>
        <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm space-y-4">
          <li>
            <strong>Codewonders:</strong> This is an intensive, energizing songs list that helps me
            through the day and inspires generate breakthrough ideas.
          </li>
          <li>
            <strong>Chill Lofi Study Beats:</strong> The perfect study beats, twenty-four seven.
          </li>
          <li>
            <strong>Mellow Drive:</strong> Easy listening for a pleasant drive.
          </li>
          <li>
            <strong>Rap UK:</strong> One of the finest rap in UK.
          </li>
          <li>
            <strong>Mood Booster:</strong> Get happy with today&apos;s dose of feel-good songs!
          </li>
        </ul>
      </div>
    ),
  },
]

const timelineDataMyPhotocromicLens = [
  {
    title: 'My Photochromic Lens.',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          This is an intensive curation of the photochromic lenses that stand out and the ones I
          personally love. Note: This is just a personal preference.
        </p>
      </div>
    ),
  },
]

export default function About() {
  return (
    <div className="flex pt-32 flex-col items-center justify-center min-h-screen px-0 sm:px-4 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h1 className="text-3xl font-bold text-left mb-8 md:ml-20 ml-5">About.</h1>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <Timeline data={timelineDataAbout} />
        <Timeline data={timelineDataMyReads} />
        <Timeline data={timelineDataMyPlaylist} />
        <Timeline data={timelineDataMyPhotocromicLens} />
      </div>
      <Footer seeMoreText="Lets Continue To Projects" seeMoreLink="/projects" />
    </div>
  )
}
