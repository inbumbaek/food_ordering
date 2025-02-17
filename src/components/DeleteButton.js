export default function DeleteButton({ label, onDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);

  if (showConfirm) {
    return (
      <div className="fixed top-0 left-0 bg-white p-4 rounded-lg">
        <div>Are you sure you want to delete?</div>
        <div className="flex gap-2 mt-1">
          <button type="button" onClick={() => setShowConfirm(false)}>
            Cancel
          </button>
          <button onClick={onDelete} type="button" className="primary">
            Yes, delete!
          </button>
        </div>
      </div>
    );
  }
  return (
    <button type="button" onClick={() => setShowConfirm(true)}>
      {label}
    </button>
  );
}
