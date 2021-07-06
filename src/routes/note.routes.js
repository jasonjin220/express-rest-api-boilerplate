import { Router } from 'express';
import {
  createNote,
  findAll,
  findOne,
  updateNote,
  deleteNote,
} from '../controllers/note.controller';

const router = Router();

// Create a new Note
router.post('/notes', createNote);

// Retrieve all Notes
router.get('/notes', findAll);

// Retrieve a single Note with noteId
router.get('/notes/:noteId', findOne);

// Update a Note with noteId
router.put('/notes/:noteId', updateNote);

// Delete a Note with noteId
router.delete('/notes/:noteId', deleteNote);

export default router;
