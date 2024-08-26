import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const HomeScreen = () => {
  return (
    <>
      <div className="relative h-screen text-white">
        <Navbar />

        <img src="/dead-pool.jpg" alt="hero-img" className='absolute top-0 left-0 w-full h-full object-cover -z-50' />

        <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-50" aria-hidden="true" />

        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32'>
          <div className='bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10' />
            <div className='max-w-2xl'>
            {/* Movie title*/}
              <h1 className='mt-4 text-6xl font-extrabold text-balance'>
                Deadpool
              </h1>
              {/* Release year | age category */}
              <p className='mt-2 text-lg'>
                2024 | 18+
              </p>

              <p className="mt-4 text-lg">
              Deadpool" is characterized by its fast-paced action, witty dialogue, and meta-commentary on superhero tropes. The film was both a critical and commercial success, praised for its fresh take on the genre, Reynolds' charismatic performance, and its ability to balance humor with heartfelt moments. It also set the stage for a successful sequel and solidified Deadpool's place as a fan-favorite character in the Marvel Universe
              </p>
              <div className='flex mt-8 '>
                <Link to="/watch/1234" className='bg-white hover:bg-white/70 text-black font-bold py-2 px-4 rounded mr-4 flex
							 items-center'>
                <Play className='size-6 inline-block mr-2 fill-black' />
                  Play 
                </Link>
              </div>
            </div>
        </div>

      </div>



      <div>

      </div>
    </>
  )
}

export default HomeScreen