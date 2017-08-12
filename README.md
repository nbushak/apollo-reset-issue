# React Apollo resetStore issue

## Anatomy of the app
This app was quickly assembled together with create-react-app.
Four files are important:

File | Description
--- | ---
DataComponent.jsx | Simple list component that displays messages from graphcool api (managed by react-apollo)
ToggleComponent.jsx | Link that (un)mounts DataComponent.jsx when clicked
ResetComponent.jsx | Link that calls `client.resetStore()` when clicked
app.jsx | Root component

## Getting started

1. Download this repo (`git clone https://github.com/c0d0g3n/apollo-reset-issue.git`)
1. Install the app (`yarn install`)
1. Start the app (`yarn start`) (it should open in you preferred browser automatically)

## Reproduce
1. A list of messages is loaded from the Graphcool endpoint via react-apollo
1. Click on `hide <Data/>` (the list of messages will unmount)
1. Click on `reset Apollo`
1. Click on `show <Data/>`

## Observed behavior
After mounting `<Data/>` (which triggers a graphql query), unmounting `<Data/>`, resetting Apollo and mounting `<Data/>` again, **the result of the second query is never propagated to the component that asked for it.** Instead, it is rerendered twice with `loading: true` and no payload (first time to be expected).

**Note that the query seems to execute properly** (`APOLLO_QUERY_RESULT` with valid data is dispatched).

## Expected behavior
The second rerender of `<Data/>` should yield a payload (in the app's case, `this.props.data.allmessages` should contain the result of the server), `loading` should be false.
