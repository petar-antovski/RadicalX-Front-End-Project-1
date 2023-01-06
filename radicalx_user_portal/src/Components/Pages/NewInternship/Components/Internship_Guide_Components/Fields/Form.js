export const Form = ({ children, ...props }) => {
  return (
    <form className="Form" {...props} noValidate>
      {children}
    </form>
  );
};
