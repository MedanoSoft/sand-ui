Basic Dropdown:

```jsx
<Dropdown label="Social Media" list={[
      'Twitter',
      'LinkedIn',
      (<br />),
      {
        name: 'GitHub',
        link: 'https://github.com/MedanoSoft',
        props: {
          onClick: () => console.log('GitHub here it goes!')
        }
      }
    ]} />
```