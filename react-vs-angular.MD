# Angular vs React – Research Notes

1. **Philosophy & Nature**
   - **Angular**: Full-fledged framework – everything is built-in (routing, state, HTTP).
   - **React**: Library for building UI – you choose your own routing, state management, etc.
   - Angular is more "opinionated"; React is more "flexible".

2. **Language Used**
   - **Angular**: Uses TypeScript by default (safer, more structured).
   - **React**: Can use plain JavaScript or optionally TypeScript.

3. **Component Architecture**
   - Both are component-based, but:
     - **Angular**: Uses `.ts`, `.html`, `.css` separately per component.
     - **React**: Usually mixes HTML (JSX) and logic in one `.js/.jsx/.tsx` file.
   - React feels more “JavaScript-ish”, Angular feels more structured and segmented.

4. **Learning Curve**
   - **Angular**: Steeper curve – more setup, strict structure, lifecycle hooks, decorators.
   - **React**: Easier to start – just learn JSX and useState/useEffect.

5. **Routing & State Management**
   - **Angular**: Built-in Router and `@ngrx/store` for state (Redux-like).
   - **React**: Uses React Router, and you can pick from Redux, Recoil, Zustand, etc. for state.

6. **Performance**
   - Both are fast – depends on how you write the code.
   - **React**: Uses virtual DOM.
   - **Angular**: Uses real DOM with smart diffing.

7. **Use Cases**
   - **Angular**: Great for enterprise-level apps (built-in tooling, large teams, opinionated structure).
   - **React**: Best for lightweight, flexible apps, or where you want control over libraries.

8. **Community & Jobs**
   - **React**: Larger open-source community and more GitHub stars.
   - **Angular**: Still widely used in corporate environments (especially in banking, insurance, etc.).
   - React jobs are more abundant, but Angular roles often expect full TypeScript experience.
