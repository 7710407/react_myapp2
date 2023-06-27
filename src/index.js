import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
    return (
        <div>
            <Person />
            <Message />
        </div>
    );
  }

  const Person = () => <h2>john doe</h2>
  const Message = () => {
    return <h2>this is my message</h2>;
}

// function Greeting() {
//     return React.createElement('h2', {}, 'hello world');
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
