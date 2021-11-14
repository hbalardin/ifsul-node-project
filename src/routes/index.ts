import { Router } from 'express';

import { answersRoutes } from './answers.routes';
import { authenticateRoutes } from './authenticate.routes';
import { questionsRoutes } from './questions.routes';
import { registersRoutes } from './registers.routes';
import { stepsRoutes } from './steps.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/answers', answersRoutes);
router.use('/questions', questionsRoutes);
router.use('/registers', registersRoutes);
router.use('/steps', stepsRoutes);
router.use('/users', usersRoutes);
router.use(authenticateRoutes);

export { router };
