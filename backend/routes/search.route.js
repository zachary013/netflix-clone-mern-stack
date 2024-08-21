import express from 'express';
import { getSearchHistory, removeItemFromSearchHistory, searchActor, searchMovie, searchTv } from '../controllers/search.controller.js';

const router = express.Router();

//Search for actors
router.get("/actor/:query", searchActor);
//Search for movies
router.get("/movie/:query", searchMovie);
//Search for tv shows
router.get("/tv/:query", searchTv);

//getting search history results
router.get("/history", getSearchHistory);
//delete search history
router.delete("/history/:id", removeItemFromSearchHistory);

export default router;