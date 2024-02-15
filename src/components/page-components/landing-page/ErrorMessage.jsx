const ErrorMessage = ({ message }) => {
  return (
    <>
      <div className="min-h-[80vh] flex justify-center items-center text-lg font-semibold text-red-500">
        {message}
      </div>
    </>
  );
};

export default ErrorMessage;
