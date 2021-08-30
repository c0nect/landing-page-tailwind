import Head from 'next/head'

const Logo = () => {
  return (
    <>
      <img src="/logo.png" alt="logotipo" width={150} className="p-2 hidden md:inline-block" />
      <img src="/codar.png" alt="logotipo" width={50} className="p-2 md:hidden" />
    </>
  )
}

const Menu = () => {
  return (
    <div className="p-2 flex items-center">
      <a href="http://github.com/c0nect" target="_blank">
        github
      </a>

      <a href="http://instagram.com/lucasss.cc" target="_blank">
        instagram
      </a>

      <a href="http://twitter.com/lucasssdotcc" target="_blank">
        twitter
      </a>
    </div>
  )
}

const Banner = () => {
  return (
    <div className="container max-w-5xl m-auto p-6 flex-1 flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
      <span className="text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
      <div className="text-4xl font-extrabold leading-snug">
        Developer <span className="text-green-500">software</span> from scrath
      </div>
      <span className="text-gray">Maiores, totam, officia nostrum pariatur tempore possimus ad cumque quisquam accusamus quas inventore</span>
    </div>
  )
}

const Header = () => {
  return (
    <div className="p-2 container max-w-5xl m-auto flex justify-between item-center" >
      <Logo />
      <Menu />
    </div>
  )
}

const Footer = () => {
  return (
    <div className="w-full bg-black py-5 relative overflow-hidden">
      <div class="container mx-auto z-10 relative">
          <h1 class="xl:text-1xl lg:text-1xl text-center xl:text-left text-white font-bold mb-8">Sign up for product news and updates</h1>
          <div class="flex items-center mx-auto xl:mx-0 justify-between xl:w-1/3 lg:w-1/3 md:w-1/3 lg:mx-auto w-10/12 border-b border-gray-400 z-10">
              <input type="email" placeholder="Enter your best e-mail" class="bg-transparent focus:outline-none text-white w-11/12 pb-4" id="email" aria-label="email" />
              <button aria-label="submit" role="button" class="mb-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#CBD5E0" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="15" y1="16" x2="19" y2="12" />
                      <line x1="15" y1="8" x2="19" y2="12" />
                  </svg>
              </button>
          </div>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div className="flex flex-col flex-1" style={{ background: 'url(/bg.png) no-repeat center/cover' }} >
      <Head>
        <title>landing page | tailwind.css</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner />
      <Footer></Footer>
    </div>
  )
}

export default Home