import { CustomeFieldsList } from "../components/CustomeInputField";
import { dateTimeToString } from "../utils/dateTime";

const newTodoInitialState: CustomeFieldsList =
  [
    {
    label: 'Title',
    type: 'text',
    fieldType: 'normal',
    value: '',
    placeholder: 'Enter Title',
    helperText: 'Title must be 2 min characters and 50 max',
    error: null,
    isRequired: true,
  },
  {
    label: 'Description',
    type: 'text',
    fieldType: 'text-area',
    value: '',
    placeholder: 'Enter Decription',
    helperText: 'Description must be 2 min characters and 100 max',
    error: null,
    isRequired: true,
  },
  {
    label: 'Date',
    type: 'text',
    fieldType: 'date-time',
    value: dateTimeToString(new Date(new Date().getTime() + 30 * 60000)),
    error: null,
    isRequired: true,
  },
];

export default newTodoInitialState;
