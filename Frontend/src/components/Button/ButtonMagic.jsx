function Button({ text = null, action = null, type = null, tailwind = null }) {
  return (
    <button type={type} onClick={action} className={tailwind}>
      {text}
    </button>
  );
}

export { Button };
