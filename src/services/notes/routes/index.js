import express from 'express';
import {
  createNote,
  deleteNote,
  editNote,
  getNoteById,
  getNotes,
} from '../controller/note-controller.js';
import { validate } from '../../../middlewares/validate.js';
import { notePayloadSchema } from '../../../services/notes/validator/schema.js';

const router = express.Router();

router.post('/notes', validate(notePayloadSchema), createNote);
router.get('/notes', getNotes);
router.get('/notes/:id', getNoteById);
router.put('/notes/:id', validate(notePayloadSchema), editNote);
router.delete('/notes/:id', deleteNote);

export default router;