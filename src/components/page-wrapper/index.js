export const PageWrapper = (props) => {
  return (
    <div className='p-relative page-wrapper'>
      <div className='w-50pct  mh-auto'>{props.children}</div>
    </div>
  );
};
