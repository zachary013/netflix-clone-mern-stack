
import { fetchFromTMDB } from "../services/tmdb.service.js";

//Get trending tv shows and display them in a dynamic way
export async function getTrendingTv(req, res) {
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=1`);
        
        if (!data.results || data.results.length === 0) {
            return res.status(404).json({ success: false, message: "No trending tv shows found" });
        }

        const randomTv = data.results[Math.floor(Math.random() * data.results.length)];

        res.json({ success: true, content: randomTv });
    } catch (error) {
        console.log("Error in getTrendingTv controller", error.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

//Get Tv shows trailers and display them in a dynamic way
export async function getTvTrailers(req, res) {
	const { id } = req.params;
	try {
		const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`);
		res.json({ success: true, trailers: data.results });
	} catch (error) {
		if (error.message.includes("404")) {
			return res.status(404).send(null);
		}

		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

//Get tv shows details and display them in a dynamic way
export async function getTvDetails(req, res) {
    const { id } = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`);
        res.status(200).json({ success: true, details: data });
    } catch (error) {
        if (error.message.includes("404")) {
            return res.status(404).send(null);
        }

        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

//Get similar tv shows and display them in a dynamic way
export async function getSimilarTvs(req, res) {
    const { id } = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`);
        res.json({ success: true, similarTvs: data.results });
    } catch (error) {
        if (error.message.includes("404")) {
            return res.status(404).send(null);
        }

        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

//Get tv shows by category and display them in a dynamic way
export async function getTvsByCategory(req, res) {
    const { category } = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`);
        res.json({ success: true, tvs: data.results });
    } catch (error) {
        if (error.message.includes("404")) {
            return res.status(404).send(null);
        }

        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
