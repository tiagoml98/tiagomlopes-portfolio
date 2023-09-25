import { createSignal, onCleanup } from 'solid-js'
import LinkedInButton from '../components/LinkedinInButton'
import GitHubButton from '../components/GitHubButton'
import ResumeButton from '../components/ResumeButton'
import ProjectAccordion from '../components/ProjectAccordion'

const Home = () => {
  const [typingText, setTypingText] = createSignal('')
  const greetingText = "Hey, I'm Tiago"

  const startTyping = () => {
    let currentIndex = 0
    const intervalId = setInterval(() => {
      if (currentIndex === greetingText.length) {
        clearInterval(intervalId)
      } else {
        setTypingText(prevText => prevText + greetingText[currentIndex])
        currentIndex++
      }
    }, 75)

    onCleanup(() => {
      clearInterval(intervalId)
    })
  }

  startTyping()

  return (
    <div class="mb-96 px-2">
      <div class="w-96 border-b-2 border-gray-400 pt-6">
        <p class="font-bold text-5xl ">{typingText()}</p>
      </div>

      <div class="space-y-2 mt-8">
        <p class="text-lg">
          I'm a software engineer working at
          <a
            class="text-green-600 font-bold"
            href="http://gevernova.com/"
            target="_blank"
          > GE Vernova. </a>
          I mostly work on edge computing services that run on power plants.
        </p>
        <p class="text-lg">Here's what I've been exploring lately outside of work</p>
      </div>
      <div class="w-full pt-2 overflow-hidden">
        <ProjectAccordion />
      </div>

      <div class="flex my-2 items-start flex-col space-y-2 md:flex-row  md:space-x-4 md:space-y-0 ">
        <GitHubButton />
        <LinkedInButton />
        <ResumeButton />
      </div>
    </div>
  )
}

export default Home
