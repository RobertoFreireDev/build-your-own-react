export const React = {
    createElement: (tag, props, ...children) => {
        if (typeof tag == "function")
        {
            return tag(props);
        }
        return { tag, props : { ...props, children}};
    },
}

export const render = (reactElement, container) => {
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

export const createRoot = (container) => {
  return {
    render: function (reactElement) {
      render(reactElement, container);
    },
  };
};