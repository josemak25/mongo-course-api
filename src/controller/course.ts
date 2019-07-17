import { Request, Response, NextFunction } from 'express';
import * as model from '../models/courseCrud';

export const getCourses = async (_req: Request, res: Response) => {
  const courses = await model.findAll();

  if (!courses.length) {
    return res.status(404).json({
      message: 'Not Record Found'
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
  const { body } = req;

  const course = await model.createOne(body);

  return res.status(200).json({
    message: 'Successful',
    course
  });
};

export const updateCourse = async (req: Request, res: Response) => {
  const { id } = req.params;

  const course = await model.updateOne(id, req.body);

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
