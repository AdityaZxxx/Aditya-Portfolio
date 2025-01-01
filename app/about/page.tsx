'use client'

import Footer from '@/components/Footer'
import { TiArrowDown, TiArrowRight } from 'react-icons/ti'
// import Image from 'next/image'

const timelineDataAbout = [
  {
    title: 'About Me.',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
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
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
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
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal ">
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
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal ">
          This is an intensive curation of the photochromic lenses that stand out and the ones I
          personally love. Note: This is just a personal preference.
        </p>
      </div>
    ),
  },
]

export default function About() {
  return (
    <div className="h-screen flex flex-col justify-center items-center px-6 sm:px-8 md:px-16 lg:px-24">
      <div className="min-h-screen mt-28  py-16 px-6 sm:px-8 md:px-16 lg:px-24">
        <section className="bg-transparent py-12 sm:py-16 lg:py-20 xl:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300">
                About Me.
              </p>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl lg:text-5xl">
                Let&apos;s get to know me
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 dark:text-gray-300 lg:text-xl lg:leading-8">
                Here are some summaries of me
              </p>
            </div>
            <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
              <li className="flex-start group relative flex lg:flex-col">
                <span
                  className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                  aria-hidden="true"
                ></span>
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                  <TiArrowDown className="h-8 w-8 text-gray-600 group-hover:text-white hidden sm:block" />
                  <TiArrowRight className="h-8 w-8 text-gray-600 group-hover:text-white sm:hidden block" />
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-10">
                  <h3 className="text-xl font-bold dark:text-gray-300 text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                    {timelineDataAbout[0].title}
                  </h3>
                  <h4 className="mt-2 text-base text-gray-700">{timelineDataAbout[0].content}</h4>
                </div>
              </li>
              <li className="flex-start group relative flex lg:flex-col">
                <span
                  className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                  aria-hidden="true"
                ></span>
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                  <TiArrowDown className="h-8 w-8 text-gray-600 group-hover:text-white hidden sm:block" />
                  <TiArrowRight className="h-8 w-8 text-gray-600 group-hover:text-white sm:hidden block" />
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-10">
                  <h3 className="text-xl font-bold dark:text-gray-300 text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                    {timelineDataMyReads[0].title}
                  </h3>
                  <h4 className="mt-2 text-base text-gray-700">{timelineDataMyReads[0].content}</h4>
                </div>
              </li>
              <li className="flex-start group relative flex lg:flex-col">
                <span
                  className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                  aria-hidden="true"
                ></span>
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                  <TiArrowDown className="h-8 w-8 text-gray-600 group-hover:text-white hidden sm:block" />
                  <TiArrowRight className="h-8 w-8 text-gray-600 group-hover:text-white sm:hidden block" />
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-10">
                  <h3 className="text-xl font-bold dark:text-gray-300 text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                    {timelineDataMyPlaylist[0].title}
                  </h3>
                  <h4 className="mt-2 text-base text-gray-700">
                    {timelineDataMyPlaylist[0].content}
                  </h4>
                </div>
              </li>
              <li className="flex-start group relative flex lg:flex-col">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                  <TiArrowDown className="h-8 w-8 text-gray-600 group-hover:text-white hidden sm:block" />
                  <TiArrowRight className="h-8 w-8 text-gray-600 group-hover:text-white sm:hidden block" />
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-10">
                  <h3 className="text-xl font-bold dark:text-gray-300 text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                    {timelineDataMyPhotocromicLens[0].title}
                  </h3>
                  <h4 className="mt-2 text-base text-gray-700">
                    {timelineDataMyPhotocromicLens[0].content}
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <div className="mt-10">
          <Footer seeMoreText="Lets Continue To Projects" seeMoreLink="/projects" />
        </div>
      </div>
    </div>
  )
}
