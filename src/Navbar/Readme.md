Basic Navbar
```jsx
<Navbar
    title="SandUI" />
```

With Right node
```jsx
<Navbar
    title="SandUI"
    right={(<span>&hearts;</span>)} />
```

With searchbar
```jsx
<Navbar
    title="SandUI"
    right={(<span>&hearts;</span>)}
    searchbar />
```

With style object
```jsx
<Navbar
    title="SandUI"
    right={(<span>&hearts;</span>)}
    searchbar
    style={{ backgroundColor: '#dedede' }} />
```

With placeholder in searchbar
```jsx
<Navbar
    title="SandUI"
    right={(<span>&hearts;</span>)}
    placeholder="Placeholder"
    searchbar
    style={{ backgroundColor: '#dedede' }} />
```

With onSearch event
```jsx
<Navbar
    title="SandUI"
    right={(<span>&hearts;</span>)}
    searchbar
    onSearch={(val) => console.log(`You are looking for ${val}`)} />
```