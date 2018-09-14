onmessage = ({ data }) => {
  square(data);
};

function square({ value, id }) {
  setTimeout(() => {
    postMessage({ squared: value * value, id });
  }, 3000);
}
