export const Container2 = ({ className, ...props }) => {
  return (
    <div style={{ zIndex: -1 }} className={`p-absolute w-100pct moveUpDown h-100vh ${className}`}>
      <div>{props.children}</div>
    </div>
  );
};
