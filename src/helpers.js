export const FORM_PROPS = {
  TITLE: "title",
  OBSERVATIONS: "observations",
};

export const TODO_FORM_INITIAL_STATE = {
  [FORM_PROPS.TITLE]: "",
  [FORM_PROPS.OBSERVATIONS]: "",
};

export const TODO_STATUS_FILTER = {
    ALL: null,
    ACTIVE: "Active",
    COMPLETED: "Completed"
}
