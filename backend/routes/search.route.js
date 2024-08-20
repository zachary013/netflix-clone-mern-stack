import express from 'express';
import { searchActor, searchMovie, searchTv } from '../controllers/search.controller.js';
import { fetchFromTMDB } from '../services/tmdb.service.js';

const router = express.Router();

//Search for actors
router.get("/actor/:query", searchActor);
//Search for movies
router.get("/movie/:query", searchMovie);
//Search for tv shows
router.get("/tv/:query", searchTv);

export default router;