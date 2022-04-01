export const Container = (props) => {
  return (
    <div data-scroll data-scroll-speed='1' className='p-absolute d-flex justify-center column w-50pct h-100vh'>
      <div>{props.children}</div>
    </div>
  );
};
