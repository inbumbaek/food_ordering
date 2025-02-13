export default function DeleteButton({label,onDelete}) {
  const [showConfirm, setShowConfirm] = useState(false);

  if (showConfirm) {
    return(
      <div className="flex gap-2">
        <button type="button">
          Cancel
        </button>
        <button type="button">
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