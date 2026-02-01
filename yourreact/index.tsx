let React = {
    createElement: (tag, props, ...children) => {
        if (typeof tag == "function")
        {
            return tag(props);
        }
        return { tag, props : { ...props, children}};
    },
}

function render(reactElement, container){
    console.log(reactElement);
    if (['string','number'].includes(typeof reactElement))
    {
        container.appendChild(document.createTextNode(reactElement));
        return;
    }
    const domElement = document.createElement(reactElement.tag);
    Object.keys(reactElement.props || [])
        .filter(p => p != 'children')
        .forEach(p => domElement[p] = reactElement.props[p]);
    (reactElement.props?.children || []).forEach(child => {
        render(child, domElement);
    });
    container.appendChild(domElement);
}

let createRoot = (container) => {
  return {
    render: function (reactElement) {
      render(reactElement, container);
    },
  };
};

const App = () => <div className="customClass">
    <h1>Hello, person!</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae nemo tempore sint nihil, cumque incidunt. Aspernatur eaque molestiae praesentium dolorem officiis officia expedita mollitia voluptas aliquid inventore, quam sed quas.
    </p>
</div>;

const root = createRoot(document.getElementById("root"))
root.render(<App/>);