# Hooks, Transitions, and other stuff

Repository used for toying around with smooth page transition animations of individual components. Anticipated to use what I've practiced with here on future version of Pokedex. For example: filtering of list of pokemon, pokemon card expands with more information on click from the list, etc.

## What I've picked up so far

**React Spring**

I'm feeling more comfortable leaving behind keyframed animations for a more natural spring-based animation framework. I'm loving the ability to animate just about anything, including numbers, and can see many possible uses for the library. I haven't gotten to it yet, but I am excited to try out React Spring's implementation of hooks.

**React Hooks**

I'm coming around to believe the hype about React Hooks. I love having all of my relevant code tied neatly together in one location, a reason I am so into Styled Components and css-in-js overall, so it always bothered me when I had to spread logic out across a React Class component through `componentDidMount`, `componentWillUnmount`, state, etc. I'm excited for the way hooks appear to be able to clean up class components containing multiple branches of logic by being able to lump everything together with `useState`, `useEffect`, or custom hooks. Obviously nothing too complex in this repo, but I think hooks are promising for sure.

**Next JS _app.js**

Critical for keeping components from remounting on page changes, I finally got the chance to take a look into customizing Next JS's `_app.js` file. There's still plenty of complexitites there that I haven't wrapped my head around, but it's good to nail this piece down. I see myself using Gatsby more going forward so I'll be looking into manipulating their layout files in the same manor.