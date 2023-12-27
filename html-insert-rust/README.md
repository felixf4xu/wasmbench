cargo install wasm-pack

cargo init --lib

wasm-pack build --target web


python -m http.server 9000