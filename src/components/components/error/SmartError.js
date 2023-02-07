export default function SmartError({ error }) {
  return (
    <>
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    </>
  );
}
