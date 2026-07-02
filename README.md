# ⚡ JavaScript Learning Journey

Welcome to my personal JavaScript learning workspace! This repository tracks my journey of mastering JavaScript, starting from core fundamentals to advanced topics. It includes detailed conceptual notes, code implementations, and practice exercises.

## Resources
[Chai aur Javascript](https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37)

---

## 📂 Repository Structure

The workspace is organized into separate directories for documentation and hands-on tutorials:

- 📖 **[docs/](docs)**: Conceptual explanations, notes, and task lists.
- 🧪 **[tutorial/](tutorial)**: Step-by-step topic implementations and code examples.
- 🏋️ **[pratice/](pratice)**: Workspace reserved for coding challenges and practical exercises.

---

## 🗺️ Syllabus & Progress Roadmap

Below is a detailed map of the concepts covered in this repository, along with links to the corresponding source code files and documentation:

### Module 1: JavaScript Basics 🚀
| Topic | File | Conceptual Notes | Status |
| :--- | :--- | :--- | :--- |
| **Variables (`const`, `let`, `var`)** | 📄 [01_variables.js](tutorial/01-basics/01_variables.js) | 📑 [basics.md](docs/basics.md#variable-basics) | Completed |
| **DataTypes (Primitive & Reference)** | 📄 [02_dataTypes.js](tutorial/01-basics/02_dataTypes.js) | 📑 [datatypes.md](docs/datatypes.md) | Completed |
| **Type Conversion & Operations** | 📄 [03_conversionOperation.js](tutorial/01-basics/03_conversionOperation.js) | 📑 [basics.md](docs/conversion-and-operation-in-javascript) | Completed |
| **Data Types Comparisons** | 📄 [04_comparision.js](tutorial/01-basics/04_comparision.js) | 📑 [basics.md](docs/comparision-in-javascript) | Completed |
| **Datatypes Summary** | 📄 [datatypes-summary.js](tutorial/01-basics/datatypes-summary.js) | 📑 [datatypes.md](docs/datatypes.md) | Completed |
| **Memory Models (Stack vs Heap)** | 📄 [datatypes-summary.js#L40](tutorial/01-basics/datatypes-summary.js#L40) | 📑 [basics.md](docs/basics.md#memory-in-js) | Completed |
| **Strings & String Manipulation** | 📄 [05_string.js](tutorial/01-basics/05_string.js) | 📑 [basics.md](docs/strings-numbers-and-math) | Completed |
| **Numbers & Math Functions** | 📄 [06_nums_and_maths.js](tutorial/01-basics/06_nums_and_maths.js) | 📑 [basics.md](docs/numbers-and-math) | Completed |
| **Date & Time Basics** | 📄 [07_dates.js](tutorial/01-basics/07_dates.js) | - | Completed |

### Module 2: Data Structures & Objects 🛠️
| Topic | File | Conceptual Notes | Status |
| :--- | :--- | :--- | :--- |
| **Arrays (Methods, Slice, Splice)** | 📄 [01_array.js](tutorial/02-basics/01_array.js) | - | Completed |
| **Arrays (Flatten, Concat, Spread)** | 📄 [02_array.js](tutorial/02-basics/02_array.js) | - | Completed |
| **Objects Literals & Methods** | 📄 [03_objects.js](tutorial/02-basics/03_objects.js) | - | Completed |
| **Advanced Objects & JSON API** | 📄 [04_objects.js](tutorial/02-basics/04_objects.js) | - | Completed |

---

## 🧠 Key Conceptual Takeaways

### 1. Variables & Scope
- **`const`**: Assigns a read-only reference; its value cannot be reassigned.
- **`let`**: Block-scoped variable declaration, preferred for variables that will change.
- **`var`**: Avoided due to its lack of block-level scope, which can cause hoisting and scope leaks.

### 2. Memory Management
- **Stack Memory (Primitive Types)**: Access by value. You get a copy of the original value (e.g., Strings, Numbers, Booleans).
- **Heap Memory (Reference Types)**: Access by reference. Modifications affect the original object (e.g., Arrays, Objects, Functions).

### 3. Return Types of `typeof` Operator
| Data Type | `typeof` Output |
| :--- | :--- |
| **Number** | `"number"` |
| **String** | `"string"` |
| **Boolean** | `"boolean"` |
| **Null** | `"object"` *(A long-standing JS quirk)* |
| **Undefined** | `"undefined"` |
| **Symbol** | `"symbol"` |
| **BigInt** | `"bigint"` |
| **Array** | `"object"` |
| **Object** | `"object"` |
| **Function** | `"function"` |

---

## 🚀 How to Run the Files

To execute any JavaScript file locally, ensure you have [Node.js](https://nodejs.org/) installed, and run:

```bash
# Example: Run variables tutorial
node tutorial/01-basics/01_variables.js

# Example: Run objects tutorial
node tutorial/02-basics/03_objects.js
```

---

## 📈 Learning Tasks & Goals
Refer to [docs/tasks.md](docs/tasks.md) for my current roadmap and tracking of targets.

> *"JavaScript is dynamically typed—variable types are resolved at runtime, allowing flexible re-assignment, but requiring caution during datatype comparison checks."*
