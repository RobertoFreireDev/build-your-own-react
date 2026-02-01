let React = {
    createElement: (tag, props, ...children) => {
        var element = { tag, props : { ...props, children}}
        console.log(element);
        return element;
    },
}

const a = <div className="customClass">
    <h1>Hello, person!</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae nemo tempore sint nihil, cumque incidunt. Aspernatur eaque molestiae praesentium dolorem officiis officia expedita mollitia voluptas aliquid inventore, quam sed quas.
    </p>
</div>;