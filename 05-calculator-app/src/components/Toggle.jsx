export default function Toggle({onChange}) {
  return (<div className="toggle space-x-[.5rem]">
    <button onClick={() => onChange(1)} className="rounded px-4 py-2 bg-toggle-background-t1 text-key-equal-background-t1">1</button>
    <button onClick={() => onChange(2)} className="rounded px-4 py-2 bg-toggle-background-t1 text-key-equal-background-t1">2</button>
    <button onClick={() => onChange(3)} className="rounded px-4 py-2 bg-toggle-background-t1 text-key-equal-background-t1">3</button>
  </div>);
}
