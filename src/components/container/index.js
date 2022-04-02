export const Container = ({ className, ...props }) => {
  return (
    <div data-scroll data-scroll-speed='3' className={"w-50pct " + (className || "")}>
      {props.children}
    </div>
  );
};
