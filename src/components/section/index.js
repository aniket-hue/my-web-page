export const Section = (props) => {
  return (
    <div data-scroll-section className='d-flex first-wrapper justify-center'>
      {props.children}
    </div>
  );
};
