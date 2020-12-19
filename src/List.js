import React from 'react';

const List = ({people}) => {
  return (
    <>
      {people.map((person)=>{
        const {...data} = person;
        return <article key={data.id} className='person'>
          <img src={data.image} alt={data.name} />
          <div>
            <h4>{data.name}</h4>
            <p>{data.age} years</p>
          </div>
        </article>
      })}
    </>
  );
};

export default List;