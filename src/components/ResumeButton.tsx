import { Ripple, initTE } from 'tw-elements'
import {createEffect} from "solid-js";

const ResumeButton = () => {

  createEffect(() => {
    (async () => {
      await import('tw-elements')
      initTE({ Ripple }, { allowReinits: true }) // options if needed
    })()
  })

  return (
    <button
      type="button"
      data-te-ripple-init
      data-te-ripple-color="light"
      class="inline-block rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-lg focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
    >
      Download my resume
    </button>
  )
}

export default ResumeButton
