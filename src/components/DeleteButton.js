export default function DeleteButton({label,onDelete}) {
  const [showConfirm, setShowConfirm] = useState(false);

  if (showConfirm) {
    return(
      <div className="flex gap-2">
        <button type="button" onClick={() => setShowConfirm(false)}>
          Cancel
        </button>
        <button type="button" className="primary">
          Yes, delete!
        </button>
      </div>
    )
  }
  return (
    <button type="button" onClick={() => setShowConfirm(true)}>
      {label}
    </button>
  );
}