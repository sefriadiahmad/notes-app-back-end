import express from 'express';
import {
  createNote, getNotes, getNoteById, editNoteById, deleteNote
} from '../controller/note-controller.js';
import { validate, validateQuery } from '../../../middlewares/validate.js';
import { notePayloadSchema, noteQuerySchema } from '../../../services/notes/validator/schema.js';
import authenticateToken from '../../../middlewares/auth.js';

const router = express.Router();

router.post('/notes', authenticateToken, validate(notePayloadSchema), createNote);
router.get('/notes', authenticateToken, validateQuery(noteQuerySchema), getNotes);
router.get('/notes/:id', authenticateToken, getNoteById);
router.put('/notes/:id', authenticateToken, validate(notePayloadSchema), editNoteById);
router.delete('/notes/:id', authenticateToken, deleteNote);

export default router;