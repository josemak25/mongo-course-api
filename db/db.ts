import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const connection = (url: string) => {
  return mongoose.connect(url, {
    useNewUrlParser: true
  });
};

export default connection;
