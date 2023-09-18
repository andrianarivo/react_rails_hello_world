import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectGreetings} from "../redux/store";
import {getGreeting} from "../redux/greetings/greetingsSlice";

function Greeting() {
  const {
    greetingData, loading, error, errMsg,
  } = useSelector(selectGreetings)
  const dispatch = useDispatch();

  const refresh = () => {
    dispatch(getGreeting({url: '/api/v1/greeting'}));
  }

  useEffect(() => {
    refresh()
  }, [dispatch]);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>
          Oops! an error occurred. Please try again.
          {errMsg}
        </p>
      </div>
    );
  }

  return (
    <main>
      <h1>Rails & React</h1>
      <p>{greetingData.greeting}</p>
      <button onClick={refresh}>Refresh</button>
    </main>
  );
}

export default Greeting;
