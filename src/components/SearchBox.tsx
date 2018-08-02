import * as React from 'react';

type SearchBoxProps = {
  searchChange?: (() => any)
}

const SearchBox = ({ searchChange }: SearchBoxProps) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
        value={searchfield}
      />
    </div>
  );
};

export default SearchBox;