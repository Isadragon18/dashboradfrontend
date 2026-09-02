import { useState } from "react";
import PartyBtn from "./button";
import "./test.css";

const ALL_NAMES = ["Clinton", "Geowell", "Multichase", "SMS Joy", "TBD", "Mega Field", "Ulla"];

function PartyCard() {
  const [selected, setSelected] = useState(ALL_NAMES); // all selected by default
  const allSelected = selected.length === ALL_NAMES.length;

  const toggleParty = (name) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const clearFilter = () => {
    if (!allSelected) setSelected(ALL_NAMES);
  };

  return (
    <div className="card">
      <div className="header-row">
        <p>Responsible Party</p>
        <div className="icon-row">
          <button
            type="button"
            className="icon-btn"
            title="Filter parties (click below to select)"
          >
            <FilterIcon active={!allSelected} />
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={clearFilter}
            disabled={allSelected}
            title={allSelected ? "No filter applied" : "Clear filter"}
          >
            <ClearFilterIcon />
          </button>
        </div>
      </div>

      <hr />

      <div className="btn">
        {ALL_NAMES.map((name) => (
          <PartyBtn
            key={name}
            name={name}
            isSelected={selected.includes(name)}
            onToggle={toggleParty}
          />
        ))}
      </div>
    </div>
  );
}

function FilterIcon({ active }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 4h18l-7 8v6l-4 2v-8L3 4z"
        stroke={active ? "#7A1E63" : "#6b7280"}
        strokeWidth="2"
        strokeLinejoin="round"
        fill={active ? "#7A1E63" : "none"}
      />
    </svg>
  );
}

function ClearFilterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" stroke="#6b7280" strokeWidth="2" strokeLinejoin="round" />
      <path d="M17 3l4 4M21 3l-4 4" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default PartyCard;