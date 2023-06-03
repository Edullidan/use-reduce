import { useReducer } from "react";

const initialState = {
  userName: "asd",
  age: 1234,
  postMessage: [{ title: "asd" }, {}, {}],
  likedPosts: [{}],
  photos: [{}, {}, {}],
  address: {
    home: {
      street: "asdad",
      building: 134,
    },
    work: {
      building: 134,
      street: "asdad",
    },
  },
};

type actionType = {
  type: string;
  payload: string;
};

type state = typeof initialState;

const reducer = (state: state, action: actionType) => {
  const newState = {...state};
  switch (action.type) {
    case "UPDATE_WORK_ADDRESS":
     state.address.work.street = action.payload
     return newState;
     case 'UPDATE_USERNAME':
      state.userName = action.payload as string
      return newState;
    default:
      throw new Error();
  }
};

function App() {
  const [user, dispatch] = useReducer(reducer, initialState);

  console.log(user)
  return (
    <div className='App'>

      <p>Work Address: {user.address.work.street}</p>
      <p>UserName: {user.userName}</p>
      <button
        onClick={() => {
          dispatch({
            type: "UPDATE_WORK_ADDRESS",
            payload: "Vazha-Pshavela",
          });
          dispatch({
            type: 'UPDATE_USERNAME',
            payload: 'Edo'
          })
        }}
      >
        Update Street
      </button>
    </div>
  );
}

export default App;
