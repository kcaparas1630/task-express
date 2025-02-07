import { date, object, string } from 'yup';

const todayDate: Date = new Date(Date.now());
const maxDate: Date = new Date('2050-12-31');

const taskValidationSchema = object({
  body: object({
    taskName: string().required('Task name is required'),
    taskDescription: string().required('Task Description is required'),
    taskProgress: string()
      .oneOf(['NOTSTARTED', 'STARTED', 'COMPLETED'])
      .required('Task Progress is required'),
    taskDueDate: date()
    .min(todayDate, 'Date must be today or later.')
    .max(maxDate, 'Date must be no more than December 31, 2050')
    .required('Due date is required'),
  }),
});

export default taskValidationSchema;
