import Course from './course';

export const findAll = () => {
  return Course.find({}).exec();
};

export const createOne = (course: any) => {
  return Course.create(course);
};

export const findOne = (id: string) => {
  return Course.findById(id).exec();
};

export const updateOne = (id: string, course: any) => {
  return Course.findByIdAndUpdate(id, course, { new: true }).exec();
};

export const deleteOne = (id: string) => {
  return Course.findByIdAndDelete(id).exec();
};
