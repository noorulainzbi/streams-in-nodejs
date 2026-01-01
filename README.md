# Node.js Streams – Quick Reference

## 1. What are streams in Node.js?

Streams are **abstract interfaces** for handling data in a **continuous, flowing manner**, rather than as a single object.

- Data is processed in **chunks**, not all at once.
- This is crucial for **efficiency**, especially when working with large files or network data.
- Streams prevent **memory overload** by not loading the entire payload at once.

---

## 2. Four Primary Types of Streams

| Stream Type   | Description                                                      | Example                  |
| ------------- | ---------------------------------------------------------------- | ------------------------ |
| **Readable**  | For reading data from a source                                   | `fs.createReadStream()`  |
| **Writable**  | For writing data to a destination                                | `fs.createWriteStream()` |
| **Duplex**    | Streams that are both readable and writable                      | `net.Socket`             |
| **Transform** | Duplex streams that can **modify or transform data** as it flows | `zlib.createDeflate()`   |

---

## 3. How do streams interact with buffers?

- Streams use **buffers** as a temporary storage mechanism to hold chunks of data:
  - **Readable streams**: buffer holds data until it is consumed.
  - **Writable streams**: buffer holds data until it is written out.
- Buffers efficiently handle **raw binary data**, which is the underlying format for stream data.

---

## 4. Key Points to Remember

- Streams are **memory-efficient** and ideal for large data processing.
- **Readable streams** produce data.
- **Writable streams** consume data.
- **Backpressure** occurs when the writable stream is slower than the readable stream.
  - Use **pause/resume** or **`pipe()`** to handle backpressure.
- **Transform streams** allow real-time modification of flowing data.

---

_This README can be used as a quick reference for Node.js stream concepts, events, and best practices._
