import mongoose from 'mongoose';

interface couserInteface {
  name: String;
  author: String;
  tags: String[];
  date?: Date;
  isPublished?: Boolean;
}

const connection = (url: string) => {
  return mongoose.connect(url, {
    useNewUrlParser: true
  });
};

connection('mongodb://localhost/playground')
  .then(response => console.log('connected successfully'))
  .catch(error => console.log(error));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now() },
  isPublished: { type: Boolean, default: false }
});

const Course = mongoose.model('course', courseSchema);

const createCourse = async (course: couserInteface) => {
  const firstCourse = Course.create(course);

  const result = await firstCourse;
  console.log(result);
};

createCourse({
  name: 'Build React Native Apps',
  author: 'Amakiri Joseph',
  tags: ['React', 'Javascript']
});
