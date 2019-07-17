import { Router } from 'express';
import * as controller from '../controller/course';
const router = Router();

/* GET course listing. */
router.get('/', controller.getCourses).get('/:id', controller.getCourse);

router.post('/', controller.createCourse).put('/:id', controller.updateCourse);

router.delete('/:id', controller.deleteCourse);

export default router;
