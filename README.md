# Svelte Trousers

I _felt_ like learning about _Svelte_

**Why?**

- Uses a compiler to generate code, rather than importing a library or framework and using a subset of features. _Svelte_ means lean.
- Includes built in features such as component specific css scoping (similar to `styled-components` in React).
- Promises of writing less code to handle state updates, and resulting code that is more performant than React.
- Mainly inspired by [this talk on rethinking reactivity](https://svelte.dev/blog/svelte-3-rethinking-reactivity)

## Scripts

**To start locally:**

```bash
cd svelte-trousers
npm run dev
```

App is hosted at [localhost:5000](http://localhost:5000)

**Other environments:** _(TODO: work out how to deploy this)_

- To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.
- Recommended options to deploy to the web include using Vercel and Surge.
- To create an optimised version of the app for production:

```bash
npm run build
```

## Sirv

- [Sirv](https://github.com/lukeed/sirv) is included as a `dependency`, so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).
- Only responds to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.
- If using multiple routes, sirv needs to be able to respond to requests for _any_ path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

---

### My Notes

_Setup and stuff_

- [scss setup](https://daveceddia.com/svelte-with-sass-in-vscode/)
- [css backgrounds](https://freefrontend.com/css-background-patterns/)
- [writing css with svelte](https://css-tricks.com/what-i-like-about-writing-styles-with-svelte/)
- [Todo list tutorial on MDN](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
- Console logs have a dollar sign before them: `$: console.log(`todos ${todos}`);`
