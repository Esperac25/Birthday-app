
import React, { useState } from 'react';
import data from './peopleStore';
import List from './List';

const App = () => {
  const [people,setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
      <div className='logo'>
        <h1>Birthday Reminder</h1>
      </div>
        <br />
        <h3 className='logo'>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
      </main>
  )
}
export default App;


