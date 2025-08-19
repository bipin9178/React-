import React from 'react';

function Card(username) {
  console.log(username);
  
  return (
    <div>
      <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl">
  <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800">{ username.username}
    </h3>
    <p className="mt-1 text-gray-500">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <p className="mt-5 text-xs text-gray-500">
      Last updated 5 mins ago
    </p>
  </div>
  <img className="w-full h-auto rounded-b-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image"/>
</div>
    </div>
  );
}

export default Card;
