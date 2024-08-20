
import { User } from "../models/user.model.js";
import { fetchFromTMDB } from "../services/tmdb.service.js";


// Search function for actors
export async function searchActor (req, res) {
    const query = req.params;
    try {
        const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/person?${query}&include_adult=false&language=en-US&page=1`);
        
        if(response.results.length === 0) {
            // 404 not found
            return res.status(404).send(null)
        }

        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                searchHistory: {
                    id: response.results[0].id,
                    image: response.results[0].profile_path,
                    title: response.results[0].name,
                    searchType: "actor",
                    createdAt: new Date()
                }
            }
        });

        res.status(200).json({messgae: "Success", content: response.results});
    } catch (error) {
        console.log("Error in searchActor controller: ", error.message);
        res.status(500).send({succes: false, message: "Internal server error"});
    }
};

// Search function for movies
export async function searchMovie (req, res) {
    const { query } = req.params;

	try {
		const response = await fetchFromTMDB(
			`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
		);

		if (response.results.length === 0) {
			return res.status(404).send(null);
		}

		await User.findByIdAndUpdate(req.user._id, {
			$push: {
				searchHistory: {
					id: response.results[0].id,
					image: response.results[0].poster_path,
					title: response.results[0].title,
					searchType: "movie",
					createdAt: new Date(),
				},
			},
		});
		res.status(200).json({ success: true, content: response.results });
	} catch (error) {
		console.log("Error in searchMovie controller: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};

// Search function for TV shows
export async function searchTv (req, res) {
    const { query } = req.params;

	try {
		const response = await fetchFromTMDB(
			`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`
		);

		if (response.results.length === 0) {
			return res.status(404).send(null);
		}

		await User.findByIdAndUpdate(req.user._id, {
			$push: {
				searchHistory: {
					id: response.results[0].id,
					image: response.results[0].poster_path,
					title: response.results[0].name,
					searchType: "tv",
					createdAt: new Date(),
				},
			},
		});
		res.json({ success: true, content: response.results });
	} catch (error) {
		console.log("Error in searchTv controller: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};
