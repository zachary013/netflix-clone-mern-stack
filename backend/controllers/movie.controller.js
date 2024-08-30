
import { fetchFromTMDB } from "../services/tmdb.service.js";

//Get trending movies and display them in a dynamic way
export async function getTrendingMovie(req, res) {
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`);
        
        if (!data.results || data.results.length === 0) {
            return res.status(404).json({ success: false, message: "No trending movies found" });
        }

        const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];

        res.json({ success: true, content: randomMovie });
    } catch (error) {
        console.log("Error in getTrendingMovie controller", error.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

//Get movie trailers and display them in a dynamic way
export async function getMovieTrailers(req, res) {
	const { id } = req.params;
	try {
		const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);
		res.json({ success: true, trailers: data.results });
	} catch (error) {
		if (error.message.includes("404")) {
			return res.status(404).send(null);
		}

		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

//Get movie details and display them in a dynamic way
export async function getMovieDetails(req, res) {
    const { id } = req.params; // /:id/details
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);
        res.status(200).json({ success: true, details: data });
    } catch (error) {
        if (error.message.includes("404")) {
            return res.status(404).send(null);
        }

        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

//Get similar movies and display them in a dynamic way
export async function getSimilarMovies(req, res) {
    const { id } = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`);
        res.json({ success: true, similar: data.results });
    } catch (error) {
        if (error.message.includes("404")) {
            return res.status(404).send(null);
        }

        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

//Get movies by category and display them in a dynamic way
export async function getMovieByCategory(req, res) {
    const { category } = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`);
        res.json({ success: true, movies: data.results });
    } catch (error) {
        if (error.message.includes("404")) {
            return res.status(404).send(null);
        }

        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
