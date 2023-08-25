import { createSignal, onCleanup } from 'solid-js'
import { Carousel, initTE } from 'tw-elements'
import LinkedInButton from "../components/LinkedinInButton";
import GitHubButton from "../components/GitHubButton";
import ResumeButton from "../components/ResumeButton";


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
    <div class="mb-96">
      <div class="flex w-96 border-b-2 border-gray-400">
        <p class="font-bold text-5xl ">{typingText()}</p>
      </div>

      <div class="mt-8">
        <p class="text-md">
          I'm a software engineer working at
          <a
            class="text-green-600 font-bold"
            href="http://gevernova.com/"
            target="_blank"
          >
            {' '}
            GE Vernova.{' '}
          </a>
          I mostly work on edge computing services that run on power plants.
        </p>
      </div>

      <div class="w-96 border-b-2 border-gray-400 mt-36"></div>
      <div class="flex space-x-4 my-2">
        <GitHubButton />
        <LinkedInButton />
        <ResumeButton />
      </div>
    </div>
  )
}

export default Home
