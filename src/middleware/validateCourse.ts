import Joi from 'joi';
import { ErrorInterface } from '../utils/utilities';

export interface CourseInterface {
  name: String;

  author: String;

  tags: String[];

  date?: Date;

  amount: String;

  level: String;

  isPublished?: Boolean;
}

const NewCourseSchema = {
  name: Joi.string()
    .min(5)
    .max(50)
    .required(),

  author: Joi.string()
    .min(5)
    .max(50)
    .required(),

  tags: Joi.array()
    .items(
      Joi.string()
        .min(3)
        .max(20)
        .required()
    )
    .min(1)
    .max(8)
    .required(),
  amount: Joi.string()
    .min(2)
    .max(10)
    .required(),

  level: Joi.string()
    .min(5)
    .max(20)
    .required()
};

const UpdateCourseSchema = {
  name: Joi.string()
    .min(5)
    .max(50)
    .optional(),

  author: Joi.string()
    .min(5)
    .max(50)
    .optional(),

  tags: Joi.array()
    .items(
      Joi.string()
        .min(3)
        .max(20)
        .optional()
    )
    .min(1)
    .max(8)
    .optional(),
  amount: Joi.string()
    .min(2)
    .max(10)
    .optional(),

  level: Joi.string()
    .min(5)
    .max(20)
    .optional()
};

export const validateNewCourse = (course: CourseInterface) => {
  return Joi.validate(course, NewCourseSchema, {
    abortEarly: false,
    stripUnknown: true,
    skipFunctions: true
  });
};

export const validateUpdateCourse = (course: CourseInterface) => {
  if (!Object.keys(course).length) {
    const value: any = null;

    const errorObject: ErrorInterface = {
      message: "All Fields can't be empty",
      path: ['Body'],
      type: 'Error'
    };

    const error: any = {
      details: [errorObject]
    };

    return { error, value };
  }

  return Joi.validate(course, UpdateCourseSchema, {
    abortEarly: false,
    stripUnknown: true,
    skipFunctions: true
  });
};
