import React from 'react';

const Dropdown = ({ value, onChange }) => {
  return (
    <form>
      <label htmlFor="filter">Filter: </label>
      <select
        name="filter"
        id="filter"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <option value="all">show all</option>
        <option value="follow">follow</option>
        <option value="followings">followings</option>
      </select>
    </form>
  );
};

export default Dropdown;
