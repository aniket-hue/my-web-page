export const Section = ({ className, ...props }) => {
  return <div className={`d-flex first-wrapper justify-center h-100vh ${className || ""}`}>{props.children}</div>;
};
