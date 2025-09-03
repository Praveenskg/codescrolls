---
id: typescript
title: TypeScript Interview Questions
description: 50 essential TypeScript interview questions with clear explanations and runnable examples, organized from basic to advanced.
keywords:
  - typescript interview questions
  - typescript generics
  - utility types
  - narrowing
  - type guards
  - conditional types
  - advanced types
---

# TypeScript Interview Questions

This set is structured as **Basic → Intermediate → Advanced**. Each question includes a short answer and a minimal example.

---

## 🟢 Basic

### 1) What is TypeScript and why use it?
**Answer:** TypeScript is a superset of JavaScript that adds static typing, better tooling, and language features (like interfaces, generics). It helps catch errors early and improves IDE support.

**Example:**
```ts
let name: string = "Praveen"; // compile-time type checking
```

---

### 2) How is TypeScript different from JavaScript?
**Answer:** TypeScript adds a type system, compiles to JavaScript, and introduces features like enums, interfaces, generics, and advanced type operators.

**Example:**
```ts
// TS types disappear after compile
function greet(user: {name: string}) { return "Hi " + user.name; }
```

---

### 3) What are basic/primitive types in TS?
**Answer:** `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`. Non-primitive: `object`, arrays, functions, etc.

**Example:**
```ts
let a: number = 42;
let b: boolean = true;
let c: bigint = 10n;
```

---

### 4) `any` vs `unknown`?
**Answer:** `any` disables type checking; `unknown` is safer—you must narrow before use.

**Example:**
```ts
let x: unknown = "hello";
if (typeof x === "string") console.log(x.toUpperCase()); // ok
```

---

### 5) `void` vs `never`?
**Answer:** `void` is for functions that return no value. `never` is for functions that never return (throw or infinite loop).

**Example:**
```ts
function log(msg: string): void { console.log(msg); }
function fail(msg: string): never { throw new Error(msg); }
```

---

### 6) What is type inference?
**Answer:** TS infers types when not explicitly annotated, based on usage and initialization.

**Example:**
```ts
let n = 3;      // inferred number
// n = "x";     // error
```

---

### 7) Type assertion vs “casting”?
**Answer:** Type assertions tell the compiler to treat a value as a specific type; no runtime change.

**Example:**
```ts
const el = document.getElementById("app") as HTMLDivElement;
el.innerText = "Ready";
```

---

### 8) Interface vs Type alias?
**Answer:** Both can model shapes. `interface` is extendable/mergeable; `type` is more flexible (unions, mapped/conditional types).

**Example:**
```ts
interface User { id: number; name: string; }
type Point = { x: number; y: number; };
```

---

### 9) Optional and readonly properties?
**Answer:** Use `?` for optional, `readonly` to prevent reassignment.

**Example:**
```ts
interface Post {
  readonly id: string;
  title: string;
  description?: string;
}
```

---

### 10) What are enums (numeric vs string)?
**Answer:** Enums create named constants. String enums are safer and more explicit.

**Example:**
```ts
enum Role { Admin = "ADMIN", User = "USER" }
const r: Role = Role.Admin;
```

---

### 11) Unions and intersections?
**Answer:** Union (`A | B`) means one of several types. Intersection (`A & B`) combines types.

**Example:**
```ts
type ID = string | number;
type Timestamps = { createdAt: Date } & { updatedAt: Date };
```

---

### 12) Literal types
**Answer:** Restrict a value to exact literals (e.g., `"GET"` or `200`).

**Example:**
```ts
type Method = "GET" | "POST";
const m: Method = "GET";
```

---

### 13) Type aliases
**Answer:** Create a name for any type (unions, primitives, functions).

**Example:**
```ts
type StringMap = Record<string, string>;
```

---

### 14) Structural typing (duck typing)
**Answer:** Compatibility depends on shape, not explicit declarations.

**Example:**
```ts
interface Named { name: string; }
const obj = { name: "TS", version: 5 };
const n: Named = obj; // ok (has name)
```

---

### 15) Generics (basics)
**Answer:** Generics allow reusable components with type parameters.

**Example:**
```ts
function identity<T>(x: T): T { return x; }
const s = identity<string>("hello");
```

---

### 16) Generic constraints (`extends`)
**Answer:** Constrain generic parameters to specific shapes.

**Example:**
```ts
function len<T extends { length: number }>(x: T) { return x.length; }
```

---

### 17) Utility types: `Partial`, `Required`, `Readonly`, `Record`
**Answer:** Built-ins for common transformations.

**Example:**
```ts
interface User { id: string; name: string; }
type UserPatch = Partial<User>;
type UserDict = Record<string, User>;
```

---

### 18) `Pick` & `Omit`
**Answer:** Select or exclude properties from a type.

**Example:**
```ts
type User = { id: string; name: string; email: string };
type UserPublic = Pick<User, "id" | "name">;
type UserNoEmail = Omit<User, "email">;
```

---

## 🟡 Intermediate

### 19) Mapped types
**Answer:** Create types by transforming each property of another type.

**Example:**
```ts
type Flags<T> = { [K in keyof T]?: boolean };
type FeatureFlags = Flags<{ darkMode: boolean; beta: boolean }>;
```

---

### 20) Conditional types
**Answer:** `T extends U ? X : Y`—types that depend on conditions.

**Example:**
```ts
type IsString<T> = T extends string ? true : false;
type A = IsString<"x">;  // true
type B = IsString<42>;   // false
```

---

### 21) Distributive conditional types
**Answer:** Conditional types distribute over unions.

**Example:**
```ts
type ExcludeNull<T> = T extends null | undefined ? never : T;
type Clean = ExcludeNull<string | null>; // string
```

---

### 22) `keyof` and indexed access types
**Answer:** `keyof` gets keys; `T[K]` gets property types by key.

**Example:**
```ts
type User = { id: string; age: number };
type Keys = keyof User;        // "id" | "age"
type Age = User["age"];        // number
```

---

### 23) `typeof`, `ReturnType`, `InstanceType`
**Answer:** Extract types from values/functions/classes.

**Example:**
```ts
const config = { port: 3000, secure: false };
type Config = typeof config;
function make() { return { ok: true } }
type Made = ReturnType<typeof make>;
```

---

### 24) Function overloads
**Answer:** Multiple call signatures for one implementation.

**Example:**
```ts
function toArray(x: string): string[];
function toArray(x: number): number[];
function toArray(x: string | number) { return [x]; }
```

---

### 25) Narrowing: `typeof`, `in`, `instanceof`
**Answer:** Refine types at runtime checks to safe branches.

**Example:**
```ts
function print(v: string | string[]) {
  if (typeof v === "string") console.log(v.toUpperCase());
  else console.log(v.join(", "));
}
```

---

### 26) User-defined type guards
**Answer:** Functions returning `arg is Type` to narrow.

**Example:**
```ts
type Cat = { meow: () => void };
function isCat(x: any): x is Cat { return typeof x?.meow === "function"; }
```

---

### 27) Safer APIs with `unknown` in functions
**Answer:** Accept unknown input and validate before use.

**Example:**
```ts
function parseJSON(u: unknown) {
  if (typeof u === "string") return JSON.parse(u);
  throw new Error("not a string");
}
```

---

### 28) Module resolution & path mapping
**Answer:** Configure `baseUrl`, `paths` in `tsconfig.json` for cleaner imports.

**Example (`tsconfig.json`):**
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] }
  }
}
```

---

### 29) Declaration files (`.d.ts`) & ambient declarations
**Answer:** Provide type info for JS libraries or global values.

**Example:**
```ts
// globals.d.ts
declare const __APP_VERSION__: string;
```

---

### 30) Namespaces vs ES modules
**Answer:** Namespaces are legacy internal modules; prefer ES modules (`import/export`).

**Example:**
```ts
// ES module
export const x = 1;
```

---

### 31) Classes: `public`, `private`, `protected`, `readonly`
**Answer:** Access modifiers control visibility; `readonly` prevents reassigning properties.

**Example:**
```ts
class Person {
  constructor(public name: string, private ssn: string, readonly id: number) {}
}
```

---

### 32) Abstract classes vs interfaces
**Answer:** Abstract classes can have implementation & state; interfaces are contracts only.

**Example:**
```ts
abstract class Shape { abstract area(): number; }
class Square extends Shape { constructor(private s: number){super();} area(){return this.s*this.s;} }
```

---

### 33) Mixins pattern
**Answer:** Compose classes by applying mixin functions that return new classes.

**Example:**
```ts
type Ctor<T = {}> = new (...a: any[]) => T;
function Timestamped<TBase extends Ctor>(Base: TBase) {
  return class extends Base { createdAt = new Date(); };
}
class Model {}
class User extends Timestamped(Model) {}
```

---

### 34) Decorators (experimental)
**Answer:** Functions to annotate/modify classes/members; requires `experimentalDecorators`.

**Example:**
```ts
function log(target: any, key: string) { /* wrap or mark */ }
class Svc { @log fetch(){} }
```

---

### 35) `strictNullChecks` and strict mode
**Answer:** Enables strict handling of `null`/`undefined` and other strict options to catch bugs.

**Example (`tsconfig.json`):**
```json
{ "compilerOptions": { "strict": true } }
```

---

## 🔴 Advanced

### 36) `infer` in conditional types
**Answer:** Capture a type from within another type.

**Example:**
```ts
type First<T extends any[]> = T extends [infer H, ...any[]] ? H : never;
type A = First<[1,2,3]>; // 1
```

---

### 37) Variadic tuple types
**Answer:** Model tuples of varying length while preserving structure.

**Example:**
```ts
type Push<T extends any[], V> = [...T, V];
type R = Push<[1,2], 3>; // [1,2,3]
```

---

### 38) Template literal types
**Answer:** Compose string types at the type level.

**Example:**
```ts
type EventName<E extends string> = `on${Capitalize<E>}`;
type ClickEvent = EventName<"click">; // "onClick"
```

---

### 39) Branded (nominal-like) types
**Answer:** Distinguish identical primitives by adding an unexported brand.

**Example:**
```ts
type UserId = string & { readonly brand: unique symbol };
function asUserId(id: string): UserId { return id as UserId; }
```

---

### 40) Exhaustive checks with `never`
**Answer:** Use a `switch` + `never` to ensure all cases are handled.

**Example:**
```ts
type Shape = { kind: "square"; s: number } | { kind: "circle"; r: number };
function area(sh: Shape) {
  switch (sh.kind) {
    case "square": return sh.s * sh.s;
    case "circle": return Math.PI * sh.r * sh.r;
    default: const _exhaustive: never = sh; return _exhaustive;
  }
}
```

---

### 41) Typing React props
**Answer:** Use interfaces/types for props; generics for reusable components.

**Example:**
```ts
type ButtonProps = { onClick: () => void; children: React.ReactNode };
const Button: React.FC<ButtonProps> = ({ onClick, children }) => <button onClick={onClick}>{children}</button>;
```

---

### 42) Context/Redux typing basics
**Answer:** Create typed state, actions, and selectors; use `Dispatch`, `ThunkAction` as needed.

**Example:**
```ts
type State = { count: number };
type Action = { type: "inc" | "dec" };
function reducer(s: State, a: Action): State { /* ... */ return s; }
```

---

### 43) Async/await & Promises typing
**Answer:** `Promise<T>` for async results; `async` functions return `Promise<ReturnType>`.

**Example:**
```ts
async function getUser(): Promise<{id: string}> { return { id: "1" }; }
```

---

### 44) DOM/event typing
**Answer:** Use correct event types, e.g., `MouseEvent`, `KeyboardEvent`, `ChangeEvent`.

**Example (React):**
```ts
function onChange(e: React.ChangeEvent<HTMLInputElement>) { console.log(e.target.value); }
```

---

### 45) `Exclude`, `Extract`, `NonNullable`
**Answer:** Filter unions or remove nullable types.

**Example:**
```ts
type A = Exclude<"a" | "b" | undefined, undefined>; // "a" | "b"
type B = NonNullable<string | null>;                // string
```

---

### 46) Assertion functions (`asserts`)
**Answer:** Create functions that narrow types by throwing on failure.

**Example:**
```ts
function assertString(v: unknown): asserts v is string {
  if (typeof v !== "string") throw new Error("not string");
}
```

---

### 47) The `satisfies` operator
**Answer:** Ensures a value conforms to a type **without** widening or changing its inferred type.

**Example:**
```ts
const cfg = { mode: "dev", port: 3000 } as const satisfies { mode: "dev" | "prod"; port: number };
```

---

### 48) `as const` and literal inference
**Answer:** Freeze values to readonly and preserve literal types.

**Example:**
```ts
const colors = ["red", "green", "blue"] as const; // readonly ["red","green","blue"]
type Color = typeof colors[number];               // "red" | "green" | "blue"
```

---

### 49) Key compiler options to know
**Answer:** `target`, `module`, `moduleResolution`, `strict`, `noImplicitAny`, `esModuleInterop`, `resolveJsonModule`, `skipLibCheck`.

**Example (`tsconfig.json`):**
```json
{ "compilerOptions": { "strict": true, "esModuleInterop": true } }
```

---

### 50) Project references & build optimization
**Answer:** Use project references (`composite`) to speed up large monorepos and incremental builds.

**Example (`tsconfig.build.json`):**
```json
{
  "files": [],
  "references": [{ "path": "./packages/core" }, { "path": "./packages/ui" }]
}
```

---

## Quick Practice
- Convert a JS utility to TS with strict types.
- Refactor `any` to `unknown` + guards.
- Introduce generics and utility types to remove duplication.

Good luck with your interviews!