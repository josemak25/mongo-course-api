import Course from './course';
import { CourseInterface } from '../middleware/validateCourse';

export const findAll = () => {
  return Course.find({}).exec();
};

export const createOne = (course: CourseInterface) => {
  return Course.create(course);
};

export const findOne = (id: string) => {
  return Course.findById(id).exec();
};

export const updateOne = (id: string, course: CourseInterface) => {
  return Course.findByIdAndUpdate(id, course, {
    new: true
  }).exec();
};

export const deleteOne = (id: string) => {
  return Course.findByIdAndDelete(id).exec();
};
