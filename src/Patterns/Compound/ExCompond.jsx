import React from "react";
export function FlyOut(props) {
  const [open, toggle] = React.useState(false);

  return (
    <div className='compound-content '>
      {React.Children.map(props.children, child =>
        React.cloneElement(child, { open, toggle })
      )}
    </div>
  );
}

export function Toggle({ open, toggle }) {
  return (
    <div className="compound-btn" onClick={() => toggle(!open)}>
      <div>aqui</div>
    </div>
  );
}

export function List({ children, open }) {
  return open && <ul className="compound-list">{children}</ul>;
}

export function Item({ children }) {
  return <li className="compound-item">{children}</li>;
}

