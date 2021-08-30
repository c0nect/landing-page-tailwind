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

const Home = () => {
  return (
    <div className="flex flex-col flex-1" style={{ background: 'url(/bg.png) no-repeat center/cover' }} >
      <Head>
        <title>landing page | tailwind.css</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner />
    </div>
  )
}

export default Home