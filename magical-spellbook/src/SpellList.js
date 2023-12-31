import React from 'react';

function SpellList({ spells, updateSpell, deleteSpell }) {
  return (
    <ul className="list-group mt-4">
      {spells.map((spell) => (
        <li key={spell.id} className="list-group-item">
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="mb-0">{spell.name}</h5>
              <small className="text-muted">{spell.description}</small>
            </div>
            <div>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => updateSpell({ ...spell, effect: 'Magic!' })}
              >
                Cast Spell
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteSpell(spell.id)}
              >
                Delete
              </button>
            </div>
          </div>
          <p className="mt-2 mb-0">Effect: {spell.effect}</p>
        </li>
      ))}
    </ul>
  );
}

export

default SpellList;