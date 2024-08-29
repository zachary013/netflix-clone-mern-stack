import { Link, useParams } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContentStore } from '../store/content';
import Navbar from "../components/Navbar";
import axios from 'axios';
import { ORIGINAL_IMG_BASE_URL, SMALL_IMG_BASE_URL } from "../utils/constants";



const WatchPage = () => {
  const { id } = useParams();
  const [trailers, setTrailers] = useState([]);
  const [currentTrailerIdx, setCurrentTrailerIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState({});
  const [similarContent, setSimilarContent] = useState([]);
  const { contentType } = useContentStore();


  //* fetch movie/tv trailer
  useEffect(() => {
    const getTrailers = async () => {
      try {
        const res = await axios.get(`/api/${contentType}/${id}/trailers`);
        setTrailers(res.data.trailers);
      } catch (error) {
        if (error.message.includes('404')) {
          setTrailers([]);
        }
      }
    }
    getTrailers();
  }, [contentType, id]);

  //* fetch similar content
  useEffect(() => {
    const getSimilarContent = async () => {
      try {
        const res = await axios.get(`/api/${contentType}/${id}/similar`);
        setSimilarContent(res.data.similar);
      } catch (error) {
        if (error.message.includes("404")) {
          setSimilarContent([]);
        }
      }
    };

    getSimilarContent();
  }, [contentType, id]);

  //* fetch movie/tv details
  useEffect(() => {
    const getContentDetails = async () => {
      try {
        const res = await axios.get(`/api/${contentType}/${id}/details`);
        setContent(res.data.details);
      } catch (error) {
        if (error.message.includes("404")) {
          setContent(null);
        }
      } finally {
        setLoading(false);
      }
    };

    getContentDetails();
  }, [contentType, id]);

  console.log("Trailers : ", trailers);
  console.log("Similar Content : ", similarContent);
  console.log("Content Details : ", content);

  return (
    <div className='bg-black min-h-screen text-white'>
      <div className='mx-auto container px-4 py-8 -full'>
        <Navbar />

        {trailers.length > 0 && (
          <div className='flex justify-between itemds-center mb-4'>
            <button
              className={`
							bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded ${currentTrailerIdx === 0 ? "opacity-50 cursor-not-allowed " : ""
                }}
							`}
              disabled={currentTrailerIdx === 0}
              onClick={handlePrev}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className={`
							bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded ${currentTrailerIdx === trailers.length - 1 ? "opacity-50 cursor-not-allowed " : ""
                }}
							`}
              disabled={currentTrailerIdx === trailers.length - 1}
              onClick={handleNext}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default WatchPage