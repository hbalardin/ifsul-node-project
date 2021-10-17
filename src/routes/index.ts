import { Router } from 'express';

import { answersRoutes } from './answers.routes';
import { questionsRoutes } from './questions.routes';
import { registersRoutes } from './registers.routes';

const router = Router();

router.use('/answers', answersRoutes);
router.use('/registers', registersRoutes);
router.use('/questions', questionsRoutes);

export { router };
