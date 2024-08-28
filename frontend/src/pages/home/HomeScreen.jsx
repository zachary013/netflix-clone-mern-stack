import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { Play, Info } from 'lucide-react';
import useGetTrendingContent from '../../hooks/useGetTrendingContent';
import { useContentStore } from "../../store/content";
import { ORIGINAL_IMG_BASE_URL, MOVIE_CATEGORIES, TV_CATEGORIES } from '../../utils/constants';
import ContentSlider from "../../components/ContentSlider";
import { useState } from 'react';

//? Authenticated User
const HomeScreen = () => {
  const { trendingContent } = useGetTrendingContent(); //? Fetch trending content
  const { contentType } = useContentStore();  //? Get content type: movie or tv show
  const [imgLoading, setImgLoading] = useState(true);

  //todo Add a loading spinner
  if (!trendingContent) return (
    <div className='h-screen text-white relative'>
      <Navbar />
      <div className='absolute top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center -z-10 shimmer' />
    </div>
  )


  return (
    <>
      <div className="relative h-screen text-white">
        <Navbar />

        {imgLoading && (
          <div className='absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center shimmer -z-10' />
        )}

        <img
          src={ORIGINAL_IMG_BASE_URL + trendingContent?.backdrop_path}
          alt='treending content background'
          className='absolute top-0 left-0 w-full h-full object-cover -z-50'
          onLoad={() => {
            setImgLoading(false);
          }}
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-50" aria-hidden="true" />

        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32'>
          <div className='bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10' />
          <div className='max-w-2xl'>
            {/* Movie title*/}
            <h1 className='mt-4 text-6xl font-extrabold text-balance'>
              {trendingContent?.title || trendingContent?.name}
            </h1>
            {/* Release date for movies | First air date for tv shows */}
            {trendingContent?.release_date?.split("-")[0] ||
              trendingContent?.first_air_date.split("-")[0]}{" "}
            | {trendingContent?.adult ? "18+" : "PG-13"}

            <p className="mt-4 text-lg">
              {trendingContent?.overview.length > 200
                ? trendingContent?.overview.slice(0, 200) + "..."
                : trendingContent?.overview}
            </p>
            <div className='flex mt-8 '>
              {/* Play button */}
              <Link to={`/watch/${trendingContent?.id}`} className='bg-white hover:bg-white/70 text-black font-bold py-2 px-4 rounded mr-4 flex
							 items-center'>
                <Play className='size-6 mr-2 fill-black' />
                Play
              </Link>

              {/* Infos button */}
              <Link to={`/watch/${trendingContent?.id}`} className='bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded flex items-center'>
                <Info className='size-6 mr-2' />
                More Info
              </Link>
            </div>
          </div>
        </div>

      </div>

      <div className='flex flex-col gap-10 bg-black py-10'>
        {contentType === "movie"
          ? MOVIE_CATEGORIES.map((category) => <ContentSlider key={category} category={category} />)
          : TV_CATEGORIES.map((category) => <ContentSlider key={category} category={category} />)}
      </div> 
    </>
  )
}

export default HomeScreen;
