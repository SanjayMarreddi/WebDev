https://www.youtube.com/watch?v=Icf5D3fEKbM

Typescript is an opensourced programming language from Microsoft.
It is a typed superset of Java Script. It complies down to plain JS.
In short, combine JS with ES6/7 + some additional features ==> we get TS

Why TS than Dart & other langs?
- relation to JS. we can even rename .js to .ts & it works!
- Optional static typing & type inference.
- IDE support
- Rapid growth & use. 

- Compile the `.ts` file using `tsc fileName.ts` then use `node fileName.js` to run.

- Files are treated as script rather than modules. So, scripts share the same scope unlike modules which have their own scope.
To make Typescript treat a given file as a module instead of a script, we should put export/import statement in the beginning.

- To autoupdate the .js file when ever .ts file is changed, execute the command `tsc main --watch` and then open a diff terminal 
  to execute .ts file.
