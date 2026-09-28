import { Router } from 'express';
import { CVController } from '../controllers/cv.controller';

const router = Router();

// Endpoints RESTful para el recurso CV
router.get('/', CVController.getFullCV);
router.get('/profile', CVController.getProfile);
router.get('/signals', CVController.getSignals);
router.get('/experience', CVController.getExperience);
router.get('/skills', CVController.getSkills);
router.get('/education', CVController.getEducation);
router.get('/language', CVController.getLanguage);
router.get('/contact', CVController.getContact);

export default router;
