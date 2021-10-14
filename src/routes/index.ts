import { Router } from 'express';

import { answersRoutes } from './answers.routes';
import { questionsRoutes } from './questions.routes';

const router = Router();

router.use('/questions', questionsRoutes);
router.use('/answers', answersRoutes);

export { router };
