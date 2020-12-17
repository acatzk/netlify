<template>
  <div id="app" class="font-sans leading-tight">
    <header class="bg-grey-darkest antialiased">
      <div class="container max-w-7xl mx-auto px-6">
        <div class="flex items-center justify-between pt-4 pb-2 border-b-2 border-gray-700">
          <div class="flex flex-wrap items-center text-xl font-semibold">
            <svg  class="block mb-2 h-12 w-12 text-white" 
                  fill="currentColor" 
                  xmlns:xlink="http://www.w3.org/1999/xlink" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  preserveAspectRatio="xMidYMid meet">
              <path xmlns="http://www.w3.org/2000/svg" 
                    d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4a8.18 8.18 0 001.8.536c.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z">
              </path>
            </svg>
            <a href="#" class="mb-2 whitespace-nowrap ml-2 inline-flex items-center px-1 py-2 rounded text-gray-500 hover:text-white hover:bg-black-20 transition">
              <span>Joshua Galit</span>
              <svg  class="ml-2 w-5 h-5" 
                    stroke="currentColor" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    preserveAspectRatio="xMidYMid meet" 
                    fill="none">
                <path xmlns="http://www.w3.org/2000/svg" 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="M5 13l4 4L19 7">
                </path>
              </svg>
            </a>
            <a href="#" class="mb-2 whitespace-nowrap inline-flex items-center px-1 py-2 rounded text-white hover:text-white hover:bg-black-20 transition">elated-stonebraker-70896a</a>
          </div>
          <div class="flex-shrink-0">
            <button class="focus:outline-none">
              <img class="block h-10 w-10 rounded-full border-2 border-gray-500 hover:border-white transition" src="@/assets/logo.png" alt="">
            </button>
          </div>
        </div>

        <nav class="flex flex-wrap py-2 font-semibold">
          <a href="#" class="text-gray-500 mr-2 mb-2 px-2 py-2 rounded hover:bg-black-20 hover:text-white transition">Overview</a>
          <a href="#" class="text-gray-500 mr-2 mb-2 px-2 py-2 rounded hover:bg-black-20 hover:text-white transition">Deploy</a>
          <a href="#" class="text-gray-500 mr-2 mb-2 px-2 py-2 rounded hover:bg-black-20 hover:text-white transition">Functions</a>
          <a href="#" class="text-gray-500 mr-2 mb-2 px-2 py-2 rounded hover:bg-black-20 hover:text-white transition">Identity</a>
          <a href="#" class="text-gray-500 mr-2 mb-2 px-2 py-2 rounded hover:bg-black-20 hover:text-white transition">Forms</a>
          <a href="#" class="text-gray-500 mr-2 mb-2 px-2 py-2 rounded hover:bg-black-20 hover:text-white transition">Split Testing</a>
          <a href="#" class="text-white mr-2 mb-2 px-2 py-2 rounded hover:bg-black-20 hover:text-white transition">Settings</a>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {},
    data () {
      return {}
    }
  }
</script>
