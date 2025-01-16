import Body from '../Components/Home/Body.jsx'
import Footer from '../Components/Home/Footer.jsx'

import OpenLink from '../Components/Core/OpenLink.jsx'

import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import githubLogo from '../assets/github.png'


import { useSelector } from 'react-redux'

const Home = () => {
    const count = useSelector((state) => state.counter.value)

    return (
        <>
            <div>
                Count value: {count}
            </div>
            <div>
                <OpenLink redirectURL="https://vitejs.dev" logoImage={viteLogo} />
                <OpenLink redirectURL="https://react.dev" logoImage={reactLogo} />
                <OpenLink redirectURL="https://github.com" logoImage={githubLogo} />
            </div>
            <Body />
            <Footer />
        </>
    );
}

export default Home;