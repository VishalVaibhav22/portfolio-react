import * as React from "react"; // Import React library

// Constants for toast behavior
const TOAST_LIMIT = 1; // Maximum number of toasts to display at once
const TOAST_REMOVE_DELAY = 1000000; // Delay before a dismissed toast is removed (in milliseconds)

let count = 0; // Counter for generating unique toast IDs

// Function to generate a unique ID for each toast
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER; // Increment counter, wrap around at max safe integer
  return count.toString(); // Return ID as a string
}

const toastTimeouts = new Map(); // Stores timeouts for toasts to be removed

// Function to add a toast to the removal queue after its dismiss animation
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return; // If already in queue, do nothing
  }

  // Set a timeout to remove the toast after a delay
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId); // Remove from map
    dispatch({
      type: "REMOVE_TOAST", // Dispatch action to remove toast
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout); // Store the timeout in the map
};

// Reducer function to manage the state of toasts
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        // Add new toast to the beginning of the array, limit to TOAST_LIMIT
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        // Update an existing toast by merging properties
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action; // Get toast ID from action

      // Add specific toast or all toasts to the removal queue
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        // Mark toast(s) as 'open: false' to trigger dismiss animation
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      };
    }
    case "REMOVE_TOAST":
      // Remove all toasts if no specific ID is provided
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        // Filter out the specific toast to remove it from display
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
    default:
      return state; // Return current state for unknown actions
  }
};

const listeners = []; // Array to store functions that listen for state changes

let memoryState = { toasts: [] }; // In-memory state for toasts

// Function to dispatch actions and update state
function dispatch(action) {
  memoryState = reducer(memoryState, action); // Update state using the reducer
  listeners.forEach((listener) => {
    listener(memoryState); // Notify all listeners about state change
  });
}

// Main toast function to create and manage toasts
function toast(props) {
  const id = genId(); // Generate unique ID for the new toast

  // Function to update the toast
  const update = (props) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  // Function to dismiss the toast
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  // Add the new toast to the state
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true, // Toast is open by default
      onOpenChange: (open) => {
        if (!open) dismiss(); // Dismiss toast if its open state changes to false
      },
    },
  });

  // Return methods to control the newly created toast
  return {
    id: id,
    dismiss,
    update,
  };
}

// Custom React hook to consume toast state and functions
function useToast() {
  const [state, setState] = React.useState(memoryState); // Component's state reflects global toast state

  // Effect hook to subscribe and unsubscribe to state changes
  React.useEffect(() => {
    listeners.push(setState); // Add setState to listeners on mount
    return () => {
      // Cleanup: remove setState from listeners on unmount
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]); // Re-run effect if 'state' itself changes, though usually it's `[]` for subscription effects

  // Return current toast state and functions to interact with toasts
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId }), // Expose dismiss function
  };
}

// Export the hook and the toast function
export { useToast, toast };