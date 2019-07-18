import { Request, Response } from 'express';

import * as model from '../models/courseCrud';
import { validateNewCourse, validateUpdateCourse } from '../middleware/validateCourse';
import { constructError } from '../utils/utilities';

export const getCourses = async (_req: Request, res: Response) => {
  const courses = await model.findAll();

  if (!courses.length) {
    return res.status(404).json({
      message: 'No Record Found'
    });
  }

  return res.status(200).json({
    message: 'Successful',
    courses
  });
};

export const getCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  const course = await model.findOne(id);

  if (!course) {
    return res.status(404).json({
      message: `No Course with ID ${id} Found`
    });
  }

  return res.status(200).json({
    message: 'Successful',
    course
  });
};

export const createCourse = async (req: Request, res: Response) => {
  const { error, value } = validateNewCourse(req.body);

  if (error) {
    const errMessage = constructError(error.details);

    return res.status(403).json({
      message: 'Unsuccessful',
      name: 'ValidationError',
      error: errMessage
    });
  }

  const course = await model.createOne(value);

  return res.status(201).json({
    message: 'Successful',
    course
  });
};

export const updateCourse = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { error, value } = validateUpdateCourse(req.body);

  if (error) {
    const errMessage = constructError(error.details);

    return res.status(403).json({
      message: 'Unsuccessful',
      name: 'ValidationError',
      error: errMessage
    });
  }

  const course = await model.updateOne(id, value);

  return res.status(200).json({
    message: 'Successful',
    course
  });
};

export const deleteCourse = async (req: Request, res: Response) => {
  const { id } = req.params;

  const course = await model.deleteOne(id);

  if (!course) {
    return res.status(404).json({
      message: `Cannot Delete A Non Exiting Course with ID ${id}`
    });
  }

  return res.status(200).json({
    message: 'Successful',
    course
  });
};
