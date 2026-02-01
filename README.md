# Create real React project:

**npm add -D @types/react @types/react-dom**

npm run dev

# Create your own React project:

**npm add typescript parcel -D** installs TypeScript and Parcel as dev-only tools used to build and bundle your project, not as runtime dependencies. Parcel is a zero-config web bundler that turns your source files into browser-ready assets

add script and run **npm run ts:init** to create your tsconfig file. tsconfig.json tells TypeScript how to understand, type-check, and compile your code.

**npm run dev** to run project

## Create our first react object:

JSX is a syntax extension that must be transformed into standard JavaScript code before the browser can execute it. And because tsconfig.json has something "jsx": "react", React.createElement function is expected.

```tsx
let React = {
    createElement: (...args) => {
        console.log(args);
    },
}

const a = <div>hello</div>;
```

![log create element](logcreateelement.png)

## React concepts

- Create Virtual DOM:


- useState hook:

# References:

[
Deconstructing React – Tejas Kumar](https://www.youtube.com/watch?v=eTcyOCd6v1c)