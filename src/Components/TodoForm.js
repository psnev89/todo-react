import { FORM_PROPS, TODO_FORM_INITIAL_STATE } from "../helpers";

const TodoForm = ({ todoForm, addTodo, setTodoForm }) => {
  return (
    <>
      <div className="flex flex-col gap-4 mb-4">
        <div>
          <label className="block text-s font-medium text-indigo-900 dark:text-white">
            Title
            <input
              className="bg-gray-50 border border-gray-300 rounded-md p-2 hover:bg-indigo-50 focus:outline-indigo-500 flex-1 w-full"
              type="text"
              name={FORM_PROPS.TITLE}
              value={todoForm[FORM_PROPS.TITLE]}
              placeholder="Ex.: Do laundry"
              onChange={(e) =>
                setTodoForm({ ...todoForm, [e.target.name]: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label className="block text-s font-medium text-indigo-900 dark:text-white">
            Observations
            <textarea
              className="bg-gray-50 border border-gray-300 rounded-md p-2 hover:bg-indigo-50 focus:outline-indigo-500 flex-1 w-full"
              type="text"
              name={FORM_PROPS.OBSERVATIONS}
              value={todoForm[FORM_PROPS.OBSERVATIONS]}
              placeholder="Ex.: Wash only light colored cloths..."
              onChange={(e) =>
                setTodoForm({ ...todoForm, [e.target.name]: e.target.value })
              }
            />
          </label>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          className="button-layout border-2 text-indigo-500 border-indigo-500 bg-white hover:text-indigo-600 hover:border-indigo-600 block"
          onClick={() => setTodoForm(TODO_FORM_INITIAL_STATE)}
        >
          Clear
        </button>
        <button
          type="button"
          className="button-layout text-white bg-indigo-500 hover:bg-indigo-600 block flex-1"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default TodoForm;
